import { FormControl } from "@angular/forms";
export class UrlValidation {
    static isValid(control: FormControl): { [s: string]: boolean } {
        let val = (value) => {
            let regEx = new RegExp(/^((?:www\.|[\-;:&=\+\$,\w]+@)[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*)$/);
            if (value == null || value === "" || value === undefined) {
                return false;
            }
            if (!regEx.test(value)) {
                return false;
            }
            return true;
        }

        if (!val(control.value)) {
            return { 'invalidUrl': true };
        }
        return null;
    }
}
