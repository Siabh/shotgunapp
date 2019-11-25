import { SnackbarService } from "./../../../services/shared/snackbar.service";
import { ShotgunService } from "./../../../services/shotgun/shotgun.service";
import { Shotgun } from "./../../../model/shotgun.model";
import { Component, OnInit } from "@angular/core";
import { FamilleService } from "../../../services/famille/famille.service";
import { Famille } from "../../../model/famille.model";
import { PartieCommunesService } from "../../../services/partie-communes/partie-communes.service";
import { PartieCommune } from "../../../model/partie-commune.model";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-create-shotgun-dialog",
  templateUrl: "./create-shotgun-dialog.component.html",
  styleUrls: ["./create-shotgun-dialog.component.css"]
})
export class CreateShotgunDialogComponent implements OnInit {
  public famillesList: Array<Famille> = [];
  public partiesCommunesList: Array<PartieCommune> = [];
  public shotgunForm: FormGroup;

  dateFilter = (date: Date) => {
    const todayDate: Date = new Date();
    todayDate.setHours(0, 0, 0, 0);
    return date >= todayDate;
  }

  constructor(
    private familleService: FamilleService,
    private partiesCommunesService: PartieCommunesService,
    private snackBarService: SnackbarService,
    private shotgunService: ShotgunService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateShotgunDialogComponent>
  ) {
    this.familleService.famillesList.subscribe((values: Array<Famille>) => {
      this.famillesList = values;
    });

    this.partiesCommunesService.partiesCommunes.subscribe(
      (values: Array<PartieCommune>) => {
        this.partiesCommunesList = values;
      }
    );

    this.shotgunForm = this.formBuilder.group({
      name: ["", Validators.required],
      shotgunDate: ["", Validators.required],
      shotgunFamille: ["", Validators.required],
      shotgunPlace: ["", Validators.required],
      shotgunComments: [""]
    });
  }

  ngOnInit() {
    this.familleService.getFamilles();
    this.partiesCommunesService.getPartiesCommunes();
  }

  getShotgunPlaceName(this: any, value: number) {
    const partieCommune = this.partiesCommunesList.filter(
      (v: { id: number }) => v.id === value
    );
    if (partieCommune.length) {
      return `${partieCommune[0].name} (${partieCommune[0].localisation.name})`;
    }

    return "";
  }

  getFamilleName(this: any, value: number) {
    const famille = this.famillesList.filter(
      (v: { id: number }) => v.id === value
    );
    if (famille.length) {
      return `${famille[0].nomFamille}`;
    }

    return "";
  }

  createShotgun(shotgunToCreate: Shotgun) {
    this.shotgunService.createShotgun(shotgunToCreate).subscribe(
      (shotgun: Shotgun) => {
        this.snackBarService.displayNotification("Shotgun créé!");
        this.dialogRef.close();
      },
      err => {
        this.snackBarService.displayNotification(
          "Une erreur est survenue à la création du shotgun."
        );
        this.dialogRef.close();
      }
    );
  }
}
