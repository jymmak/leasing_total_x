import { Injectable } from '@angular/core';
import toastr from 'toastr';
@Injectable()
export class ToastPlugin {

    constructor() {

    }

    get(data: any = {}) {
        // tipo  = success, info, warning, error
        toastr.options.progressBar = true;
        toastr.options.positionClass = "toast-bottom-right";
        toastr.options.closeButton = true;
        toastr.options.timeOut = 5000;
        toastr.options.extendedTimeOut = 5000;
        toastr.options.preventDuplicates = true;
        toastr[data.tipo](data.contenido, data.titulo);
    }
}
