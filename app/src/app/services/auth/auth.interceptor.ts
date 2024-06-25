import { HttpInterceptorFn } from "@angular/common/http";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    console.log("CALL INERCEPTOR");
    
    const token = localStorage.getItem('token'); // ??
    console.log(token);
    

    if(token) {
        const authReq = req.clone({
            setHeaders: {
                'x-auth-token': `Bearer ${token}`
            }
        });

        return next(authReq);
    } else {
        return next(req);
    }
}