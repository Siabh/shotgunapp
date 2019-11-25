import { TestBed } from "@angular/core/testing";
import { AppModule } from "./app.module";
import { CreateShotgunDialogComponent } from "./components/shotguns/create-shotgun-dialog/create-shotgun-dialog.component";
describe("AppModule", () => {
  let pipe: AppModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AppModule] });
    pipe = TestBed.get(AppModule);
  });
  it("can load instance", () => {
    expect(pipe).toBeTruthy();
  });
});
