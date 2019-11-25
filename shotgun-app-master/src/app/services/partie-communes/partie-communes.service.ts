import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { PartieCommune } from "../../model/partie-commune.model";
import { PartieCommunesRoutes } from "../routes/service-routes";

@Injectable({
  providedIn: "root"
})
export class PartieCommunesService {
  private _PartiesCommunes: BehaviorSubject<
    Array<PartieCommune>
  > = new BehaviorSubject([]);

  public partiesCommunes: Observable<
    Array<PartieCommune>
  > = this._PartiesCommunes.asObservable();

  constructor(private httpClient: HttpClient) {}

  public getPartiesCommunes(): void {
    this.httpClient
      .get(PartieCommunesRoutes.GET_PARTIES_COMMUNES())
      .subscribe((values: Array<PartieCommune>) => {
        this._PartiesCommunes.next(values);
      });
  }

  public getPartiesCommunesShotguns(): void {
    this.httpClient
      .get(PartieCommunesRoutes.GET_PARTIES_COMMUNES())
      .subscribe((values: Array<PartieCommune>) => {
        this._PartiesCommunes.next(values);
      });
  }
}
