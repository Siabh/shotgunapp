import { Injectable, Injector } from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";

export class HttpError {
  static BadRequest = 400;
  static Unauthorized = 401;
  static Forbidden = 403;
  static NotFound = 404;
  static TimeOut = 408;
  static Conflict = 409;
  static InternalServerError = 500;
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  // Regular dep. injection doesn't work in HttpInterceptor due to a framework issue (as of angular@5.2.9),
  // use Injector directly (don't forget to add @Injectable() decorator to class).
  constructor(private _injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const logFormat = "background: maroon; color: white";

    return next.handle(req).pipe(
      tap(
        event => {},
        exception => {
          if (exception instanceof HttpErrorResponse) {
            switch (exception.status) {
              case HttpError.BadRequest:
                console.error("%c Bad Request 400", logFormat);
                break;

              case HttpError.Unauthorized:
              case HttpError.NotFound:
                console.error("%c Not Found 404", logFormat);
                break;

              case HttpError.TimeOut:
                console.error("%c TimeOut 408", logFormat);
                break;

              case HttpError.Forbidden:
              case HttpError.InternalServerError:
                console.error("%c big bad 500", logFormat);
                break;
            }
          }
        }
      )
    );
  }
}
