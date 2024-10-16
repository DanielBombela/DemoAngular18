import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";
import { showMessage } from "../../shared/utils/utilities";
import { TYPE_MESSAGE } from "../enums/type-message.enum";

export const ErrorResponseInterceptor:HttpInterceptorFn = (req,next) =>
    next(req).pipe(catchError(handleErrorResponse))


const handleErrorResponse = (error:HttpErrorResponse) =>{
console.log("************************ERROR************************");
console.log(error);
console.log("************************ERROR************************");

const errorResponse = error?.error?.message ?? "Ocurrio un error, favor de ponerse en contacto con soporte técnico." + error?.status ;
console.log(errorResponse);

showMessage(TYPE_MESSAGE.DANGER, errorResponse);
//showMessage(TYPE_MESSAGE.INFO, errorResponse);
//showMessage(TYPE_MESSAGE.SUCCESS, errorResponse);
//showMessage(TYPE_MESSAGE.WARNING, errorResponse);
//showMessage(TYPE_MESSAGE.MESSAGE, errorResponse);

return throwError(()=>error);
}