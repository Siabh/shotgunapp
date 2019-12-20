import { ResidencesService } from "../../../services/residences/residences.service";
import { Component, OnInit } from "@angular/core";
import { Residence } from "../../../model/residence.model";
import { PartieCommunesService } from 'src/app/services/partie-communes/partie-communes.service';
import { PartieCommune } from 'src/app/model/partie-commune.model';
import { Shotgun } from 'src/app/model/shotgun.model';
import { ShotgunService } from 'src/app/services/shotgun/shotgun.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-list-residence",
  templateUrl: "./list-residence.component.html",
  styleUrls: ["./list-residence.component.css"]
})

export class ListResidenceComponent implements OnInit {
  public residencesShotguns: Array<Residence>;
  public partieCommuneShotgun: Array<PartieCommune>;
  public shotguns: Array<Shotgun>;
  public id: number;
  constructor(private residencesService: ResidencesService,
    private partieCommuneService: PartieCommunesService,
    private shotgunService: ShotgunService,
    private router: Router) {
    this.id = parseInt(this.router.url.replace("/residences/",''));
    console.log(this.id);
    this.residencesService.residencesList.subscribe(
      (values: Array<Residence>) => {
        this.residencesShotguns=values.filter( (res)=>{
            return res.id==this.id
        });
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
  

  ngOnInit() {}

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
