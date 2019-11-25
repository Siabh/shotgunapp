import { Residence } from "./../../model/residence.model";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ResidenceRoutes } from "../routes/service-routes";

@Injectable({
  providedIn: "root"
})
export class ResidencesService {
  private _ResidencesList: BehaviorSubject<
    Array<Residence>
  > = new BehaviorSubject([]);

  public residencesList: Observable<
    Array<Residence>
  > = this._ResidencesList.asObservable();

  constructor(private httpClient: HttpClient) {}

  public getResidences() {
    this.httpClient
      .get<Array<Residence>>(ResidenceRoutes.GET_RESIDENCES())
      .subscribe((values: Array<Residence>) => {
        this._ResidencesList.next(values);
      });
  }

  public getResidencesShotguns() {
    this.httpClient
      .get<Array<Residence>>(ResidenceRoutes.GET_RESIDENCES_SHOTGUNS())
      .subscribe((values: Array<Residence>) => {
        this._ResidencesList.next(values);
      });
  }
}
