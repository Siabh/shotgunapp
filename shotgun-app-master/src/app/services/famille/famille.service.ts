import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Famille } from "../../model/famille.model";
import { HttpClient } from "@angular/common/http";
import { FamilleRoutes } from "../routes/service-routes";

@Injectable({
  providedIn: "root"
})
export class FamilleService {
  private _FamillesList: BehaviorSubject<Array<Famille>> = new BehaviorSubject(
    []
  );

  public famillesList: Observable<
    Array<Famille>
  > = this._FamillesList.asObservable();

  constructor(private httpClient: HttpClient) {}

  public getFamilles(): void {
    this.httpClient
      .get(FamilleRoutes.GET_FAMILLES())
      .subscribe((values: Array<Famille>) => {
        this._FamillesList.next(values);
      });
  }

  public getFamillesShotguns(): void {
    this.httpClient
      .get(FamilleRoutes.GET_FAMILLES_SHOTGUNS())
      .subscribe((values: Array<Famille>) => {
        this._FamillesList.next(values);
      });
  }
}
