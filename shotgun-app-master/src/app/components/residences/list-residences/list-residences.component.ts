import { ResidencesService } from "../../../services/residences/residences.service";
import { Component, OnInit } from "@angular/core";
import { Residence } from "../../../model/residence.model";
import { PartieCommunesService } from 'src/app/services/partie-communes/partie-communes.service';
import { PartieCommune } from 'src/app/model/partie-commune.model';
import { Shotgun } from 'src/app/model/shotgun.model';
import { ShotgunService } from 'src/app/services/shotgun/shotgun.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-list-residences",
  templateUrl: "./list-residences.component.html",
  styleUrls: ["./list-residences.component.css"]
})

export class ListResidencesComponent implements OnInit {
  public residencesShotguns: Array<Residence>;
  public partieCommuneShotgun: Array<PartieCommune>;
  public shotguns: Array<Shotgun>;
  constructor(private residencesService: ResidencesService,
    private partieCommuneService: PartieCommunesService,
    private shotgunService: ShotgunService,
    private router: Router) {
    this.residencesService.residencesList.subscribe(
      (values: Array<Residence>) => {
        this.residencesShotguns = values;
      }
    );
    this.partieCommuneService.partiesCommunes.subscribe(
      (values: Array<PartieCommune>) =>{
        this.partieCommuneShotgun= values;        
      }
    )
    this.shotgunService.shotgunsList.subscribe(
      (values: Array<Shotgun>) =>{
        this.shotguns= values;
      }
    )
  }
  

  ngOnInit() {
  }

  getShotgunForPc(pc:PartieCommune){
    var result:Array<Shotgun>=[];
    this.shotguns.forEach( (shotgun)=>{
      if(shotgun.shotgunPlace.name==pc.name){
        result.push(shotgun);
      }
    })
    return result;
  }
}
