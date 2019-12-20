import { FamilleService } from "./../../../services/famille/famille.service";
import { Component, OnInit } from "@angular/core";
import { Famille } from "src/app/model/famille.model";
import { Router } from '@angular/router';

@Component({
  selector: "app-list-famille",
  templateUrl: "./list-famille.component.html",
  styleUrls: ["./list-famille.component.css"]
})
export class ListFamilleComponent implements OnInit {
  public famillesShotguns: Array<Famille>;
  id: number;
  constructor(private famillesService: FamilleService,
    private router: Router) {
      this.id = parseInt(this.router.url.replace("/familles/",''));
    this.famillesService.famillesList.subscribe((values: Array<Famille>) => {
      this.famillesShotguns = values.filter( (famille)=>{
        return famille.id==this.id;
      });
    });
  }

  ngOnInit() {
    this.famillesService.getFamillesShotguns();
  }
}
