import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { Shotgun } from "../../model/shotgun.model";
import { ShotgunRoutes } from "../routes/service-routes";

@Injectable({
  providedIn: "root"
})
export class ShotgunService {
  private _ShotgunsList: BehaviorSubject<Array<Shotgun>> = new BehaviorSubject(
    []
  );
  public shotgunsList: Observable<
    Array<Shotgun>
  > = this._ShotgunsList.asObservable();

  private _SelectedShotgun: BehaviorSubject<Shotgun> = new BehaviorSubject(
    null
  );
  public selectedShotgun: Observable<
    Shotgun
  > = this._SelectedShotgun.asObservable();

  constructor(private httpClient: HttpClient) {}

  public getShoguns(): void {
    this.httpClient
      .get<Array<Shotgun>>(ShotgunRoutes.GET_SHOTGUNS())
      .subscribe((values: Array<Shotgun>) => {
        this._ShotgunsList.next(values);
      });
  }

  public getShogunById(id: number): void {
    this.httpClient
      .get<Shotgun>(ShotgunRoutes.GET_SHOTGUN_BY_ID(id))
      .subscribe((values: Shotgun) => {
        this._SelectedShotgun.next(values);
      });
  }

  public createShotgun(shotgunToCreate: Shotgun) {
    return this.httpClient.post<Shotgun>(
      ShotgunRoutes.CREATE_SHOTGUN(),
      shotgunToCreate
    );
  }
}
