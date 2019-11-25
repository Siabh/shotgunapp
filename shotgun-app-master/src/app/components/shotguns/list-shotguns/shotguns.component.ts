import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { ShotgunService } from "src/app/services/shotgun/shotgun.service";
import { Shotgun } from "../../../model/shotgun.model";
import { MatSort, MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-shotguns",
  templateUrl: "./shotguns.component.html",
  styleUrls: ["./shotguns.component.css"]
})
export class ShotgunsComponent implements OnInit {
  public readonly displayedColumns: string[] = [
    "name",
    "creationDate",
    "shotgunDate",
    "shotgunFamille",
    "shotgunPlace",
    "shotgunComments"
  ];
  public dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input() listeShotguns: Array<Shotgun>;

  constructor(private shotgunService: ShotgunService) {
    if (!this.listeShotguns) {
      this.shotgunService.shotgunsList.subscribe((values: Array<Shotgun>) => {
        this.dataSource = new MatTableDataSource(values);
        this.dataSource.sort = this.sort;
      });
    }
  }

  ngOnInit() {
    if (!this.listeShotguns) {
      this.shotgunService.getShoguns();
    }

    if (this.listeShotguns) {
      this.dataSource = new MatTableDataSource(this.listeShotguns);
    }

    this.dataSource.sort = this.sort;
  }
}
