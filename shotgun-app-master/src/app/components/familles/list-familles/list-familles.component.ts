import { FamilleService } from "./../../../services/famille/famille.service";
import { Component, OnInit } from "@angular/core";
import { Famille } from "src/app/model/famille.model";

@Component({
  selector: "app-list-familles",
  templateUrl: "./list-familles.component.html",
  styleUrls: ["./list-familles.component.css"]
})
export class ListFamillesComponent implements OnInit {
  public famillesShotguns: Array<Famille>;
  constructor(private famillesService: FamilleService) {
    this.famillesService.famillesList.subscribe((values: Array<Famille>) => {
      this.famillesShotguns = values;
    });
  }

  ngOnInit() {
    this.famillesService.getFamillesShotguns();
  }
}
