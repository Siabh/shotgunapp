import { Component, OnInit } from "@angular/core";
import { Residence } from './model/residence.model';
import { PartieCommune } from './model/partie-commune.model';
import { Shotgun } from './model/shotgun.model';
import { ResidencesService } from './services/residences/residences.service';
import { ShotgunService } from './services/shotgun/shotgun.service';
import { Famille } from './model/famille.model';
import { FamilleService } from './services/famille/famille.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "shotgun-app";

  public residences: Array<Residence>;
  public familles: Array<Famille>;
  public hoverResidences: boolean = false;
  public hoverFamilles: boolean = false;
  constructor(private residencesService: ResidencesService,
    private familleService: FamilleService) {
    this.residencesService.residencesList.subscribe(
      (values: Array<Residence>) => {
        this.residences = values;
      }
    );
    this.familleService.famillesList.subscribe(
      (values: Array<Famille>) =>{
        this.familles= values;
      }
    )
  }
  

  ngOnInit() {
    this.residencesService.getResidences();
    this.familleService.getFamilles();
  }

  
}
