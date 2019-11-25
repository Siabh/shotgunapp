import { TestBed } from "@angular/core/testing";
import { Injector } from "@angular/core";
import { HttpHandler } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { ErrorInterceptor } from "./http.interceptor";
describe("ErrorInterceptor", () => {
  let service: ErrorInterceptor;
  beforeEach(() => {
    const injectorStub = {};
    const httpHandlerStub = { handle: req => ({ pipe: () => ({}) }) };
    const httpRequestStub = {};
    TestBed.configureTestingModule({
      providers: [
        ErrorInterceptor,
        { provide: Injector, useValue: injectorStub },
        { provide: HttpHandler, useValue: httpHandlerStub },
        { provide: HttpRequest, useValue: httpRequestStub }
      ]
    });
    service = TestBed.get(ErrorInterceptor);
  });
  it("can load instance", () => {
    expect(service).toBeTruthy();
  });
  describe("intercept", () => {
    it("makes expected calls", () => {
      const httpHandlerStub: HttpHandler = TestBed.get(HttpHandler);
      const httpRequestStub: HttpRequest = TestBed.get(HttpRequest);
      spyOn(httpHandlerStub, "handle").and.callThrough();
      service.intercept(httpRequestStub, httpHandlerStub);
      expect(httpHandlerStub.handle).toHaveBeenCalled();
    });
  });
});
