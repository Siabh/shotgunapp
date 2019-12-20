import { SnackbarService } from "./../../../services/shared/snackbar.service";
import { ShotgunService } from "./../../../services/shotgun/shotgun.service";
import { Shotgun } from "./../../../model/shotgun.model";
import { Component, OnInit, Input } from "@angular/core";
import { FamilleService } from "../../../services/famille/famille.service";
import { Famille } from "../../../model/famille.model";
import { PartieCommunesService } from "../../../services/partie-communes/partie-communes.service";
import { PartieCommune } from "../../../model/partie-commune.model";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { ResidencesService } from 'src/app/services/residences/residences.service';
import { IfStmt } from '@angular/compiler';
import { isNull, isNullOrUndefined } from 'util';

@Component({
  selector: "app-create-shotgun-dialog",
  templateUrl: "./create-shotgun-dialog.component.html",
  styleUrls: ["./create-shotgun-dialog.component.css"]
})
export class CreateShotgunDialogComponent implements OnInit {
  public famillesList: Array<Famille> = [];
  public partiesCommunesList: Array<PartieCommune> = [];
  public shotgunForm: FormGroup;
  public shotgunsList: Array<Shotgun>;
  public partiesCommunesListFiltered: Array<PartieCommune> = [];
  public famillesListFiltered: Array<Famille> = [];


  dateFilter = (date: Date) => {
    const todayDate: Date = new Date();
    var laDate: boolean;
    todayDate.setHours(0, 0, 0, 0);
    let form = { date: this.getaDate(this.shotgunForm.value.shotgunDate), familleId: this.shotgunForm.value.shotgunFamille, pcId: this.shotgunForm.value.shotgunPlace };
    if (form.pcId != "" && form.pcId != undefined) {
      this.shotgunsList.forEach((shotgun) => {
        if (shotgun.shotgunPlace.id === form.pcId) {
          const aDate: Date = new Date(shotgun.shotgunDate);
          if (laDate == undefined) {
            laDate = date['_d'].toString() != aDate.toString()
          } else {
            laDate = (laDate && (date['_d'].toString() != aDate.toString()));
          }
        }else{
          if(laDate==undefined){laDate=true};
        }
      })
    }
    if (form.familleId != "" && form.familleId != undefined) {
      this.shotgunsList.forEach((shotgun) => {
        if (shotgun.shotgunFamille.id === form.familleId) {
          const aDate: Date = new Date(shotgun.shotgunDate);
          if(isNullOrUndefined(laDate)){
            laDate = date['_d'].toString() != aDate.toString()
          } else {
            laDate = laDate && (date['_d'].toString() != aDate.toString());
          }
        }else{
          if(laDate==undefined){laDate=true};
        }
      })
    }
    if(laDate==undefined){laDate=true};
    return date >= todayDate && laDate;
  }

  constructor(
    private familleService: FamilleService,
    private partiesCommunesService: PartieCommunesService,
    private snackBarService: SnackbarService,
    private shotgunService: ShotgunService,
    private formBuilder: FormBuilder,
    private residencesService: ResidencesService,
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
    this.shotgunService.shotgunsList.subscribe(
      (values: Array<Shotgun>) => {
        this.shotgunsList = values;
      }
    )

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
    this.residencesService.getResidences();
    this.shotgunService.getShoguns();
    this.applyfilters()
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

  getaDate(s) {
    if (s != undefined && s != "") {
      let js = s._i;
      var month = "";
      var date = "";
      if ((js.month + 1).toString().length == 1) {
        month = '0' + (js.month + 1).toString();
      } else {
        month = (js.month + 1).toString();
      }
      if ((js.date - 1).toString().length == 1) {
        date = '0' + (js.date - 1).toString();
      } else {
        date = (js.date - 1).toString();
      }
      return js.year.toString() + '-' + month + '-' + date + 'T23:00:00.000+0000';
    } else {
      return "";
    }
  }



  filterPC() {
    this.familleService.getFamilles();
    this.partiesCommunesService.getPartiesCommunes();
    let form = { date: this.getaDate(this.shotgunForm.value.shotgunDate), familleId: this.shotgunForm.value.shotgunFamille, pcId: this.shotgunForm.value.shotgunPlace };
    let pcToRemove: Array<PartieCommune> = [];
    let familleToRemove: Array<Famille> = [];
    this.partiesCommunesListFiltered = this.partiesCommunesList;
    this.famillesListFiltered = this.famillesList;
    let result = this.partiesCommunesList.forEach((pc) => {
      this.shotgunsList.forEach((shotgun) => {
        if (pc.id == shotgun.shotgunPlace.id) {
          if (form.date != "" && shotgun.shotgunDate.toString() == form.date) {
            if (pcToRemove.indexOf(pc) < 0) {
              pcToRemove.push(pc);
            }
            if (familleToRemove.indexOf(shotgun.shotgunFamille) < 0) {
              //console.log(shotgun.shotgunFamille)
              familleToRemove.push(shotgun.shotgunFamille);
            }
            if (form.familleId != "" && form.familleId != undefined && shotgun.shotgunFamille.id == form.familleId) {
              this.partiesCommunesListFiltered = [];
            }

          }
        }
      });
    });
    pcToRemove.forEach((pcRemove) => {
      this.partiesCommunesListFiltered.forEach((pc, index) => {
        if (pcRemove.id == pc.id) {
          this.partiesCommunesListFiltered.splice(index, 1);
        }
      })
    })
    //console.log(this.famillesListFiltered)
    familleToRemove.forEach((familleRemove) => {
      this.famillesListFiltered.forEach((famille, index) => {
        if (familleRemove.id == famille.id) {
          this.famillesListFiltered.splice(index, 1);
        }
      })
    })
    return result;
  }


  applyfilters() {
    this.filterPC();
    //this.getFilteredPcbyFamilly();
    //console.log(this.partiesCommunesListFiltered);
  }

}
