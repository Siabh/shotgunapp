import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { CreateShotgunDialogComponent } from "../create-shotgun-dialog/create-shotgun-dialog.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-shotgun",
  templateUrl: "./create-shotgun.component.html",
  styleUrls: ["./create-shotgun.component.css"]
})
export class CreateShotgunComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router) {
    const dialogRef = this.dialog.open(CreateShotgunDialogComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        this.router.navigate([""]);
      }
    );
  }

  ngOnInit() {
  }
}
