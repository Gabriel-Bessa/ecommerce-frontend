import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  sendSuccess(title: string, text: string) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  sendError(title: string, text: string) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }

  confirm(title: string, text: string, successCallback: Function = () => {}, errorCallback: Function = () => {}) {
    Swal.fire({
      title: title,
      text: text,
      showDenyButton: true,
      confirmButtonText: "Finalizar",
      denyButtonText: `Sair`
    }).then((result) => {
      if (result.isConfirmed) {
        successCallback()
      } else if (result.isDenied) {
        errorCallback()
      }
    });
  }
}
