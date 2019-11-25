import { ResidencesService } from "../../../services/residences/residences.service";
import { Component, OnInit } from "@angular/core";
import { Residence } from "../../../model/residence.model";

@Component({
  selector: "app-list-residences",
  templateUrl: "./list-residences.component.html",
  styleUrls: ["./list-residences.component.css"]
})
export class ListResidencesComponent implements OnInit {
  constructor(private residencesService: ResidencesService) {
    this.residencesService.residencesList.subscribe(
      (values: Array<Residence>) => {}
    );
  }

  ngOnInit() {}
}
