import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import Swal, {SweetAlertIcon} from 'sweetalert2';
import {SecurityUtils} from "../../pages/utils/security-utils";

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + SecurityUtils.getToken()
            }
        })
        return next.handle(req).pipe(tap(event => {
                    if (event instanceof HttpResponse)
                        this.processStatus(event)
                },
                error => this.processStatus(error)
            ),
        );
    }

    private processStatus(resp: any) {
        switch (resp.status) {
            case 204:
                break;
            case 400:
                this.getToast('warning', resp.error.propertie, resp.error.details);
                break;
            case 401:
            case 403:
              SecurityUtils.clearToken();
              this.getToast('error', 'Segurança', 'Parece que esta acessando um recurso protegido...');
                break;
            case 500:
                this.getToast('error', 'Oops...', 'Parece que não estamos preparados para isso. Desculpe, mas se o erro persistir chame o suporte!');
                break;
            case 501:
            case 502:
            case 503:
            case 504:
                this.getToast('error', 'Oops...', 'Parece que os nossos servidores estão fora do ar no momento, já já voltaremos a atender você!');
                break;
        }
    }

    private getToast(icon: SweetAlertIcon, title: string, text: string) {
        Swal.fire({
            icon: icon,
            title: title,
            text: text
        });
    }
}
