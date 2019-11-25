import { FamilleService } from "./services/famille/famille.service";
import { PartieCommunesService } from "./services/partie-communes/partie-communes.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from "./core/core.module";
import { ShotgunsComponent } from "./components/shotguns/list-shotguns/shotguns.component";
import { ShotgunService } from "./services/shotgun/shotgun.service";
import { CreateShotgunComponent } from "./components/shotguns/create-shotgun/create-shotgun.component";
import { CreateShotgunDialogComponent } from "./components/shotguns/create-shotgun-dialog/create-shotgun-dialog.component";
import { SnackbarService } from "./services/shared/snackbar.service";
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { ListFamillesComponent } from "./components/familles/list-familles/list-familles.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorInterceptor } from "./core/interceptor/http.interceptor";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from "@angular/material";
import { ListResidencesComponent } from "./components/residences/list-residences/list-residences.component";
import { ResidencesService } from "./services/residences/residences.service";

registerLocaleData(localeFr, "fr");

@NgModule({
  declarations: [
    AppComponent,
    ShotgunsComponent,
    CreateShotgunComponent,
    CreateShotgunDialogComponent,
    ListFamillesComponent,
    ListResidencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [
    ShotgunService,
    PartieCommunesService,
    ResidencesService,
    FamilleService,
    SnackbarService,
    { provide: LOCALE_ID, useValue: "fr-FR" },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }
  ],
  bootstrap: [AppComponent],
  entryComponents: [CreateShotgunDialogComponent]
})
export class AppModule {}
