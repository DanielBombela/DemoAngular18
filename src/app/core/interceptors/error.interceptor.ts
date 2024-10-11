import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

export const ErrorResponseInterceptor:HttpInterceptorFn = (req,next) =>
    next(req).pipe(catchError(handleErrorResponse))


const handleErrorResponse = (error:HttpErrorResponse) =>{
const errorResponse = "";

return throwError(()=>error);
}