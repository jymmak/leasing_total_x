import { FormControl } from "@angular/forms";
export class RucValidation {
    static isValid(control: FormControl): { [s: string]: boolean } {
        let val_ruc = (numero) => {
            let regEx = new RegExp('^[0-9]*$');
            let tipo: Array<any> = [
                "10", // persona natural
                "15", // sucesiones indivisas, sociedades, C. FFAA, C FFPP, DPI, Carnet de extrangeria
                "16", // se menciona como válido
                "17", // Fecha de inscripcion entre 1993 y 2000
                "20", // persona juridica
            ];
            if (numero == null || numero === "" || numero === undefined) {
                return false;
            }
            if (numero.length !== 11) {
                return false;
            }
            if (tipo.indexOf(numero.substring(0, 2)) === -1 || !regEx.test(numero)) {
                return false;
            }
            let formula_ruc = (ruc): boolean => {
                let factores = "5432765432";
                let ultimoIndex = ruc.length - 1;
                let sumaTotal = 0, residuo = 0;
                let ultimoDigitoRUC = 0, ultimoDigitoCalc = 0;

                for (let i = 0; i < ultimoIndex; i++) {
                    sumaTotal += (parseInt(ruc.charAt(i), 0) * parseInt(factores.charAt(i), 0));
                }
                residuo = sumaTotal % 11;
                let comple = residuo >= 10 ? 10 : 11;
                if (residuo >= 10) {
                    sumaTotal = sumaTotal - 1;
                    residuo = sumaTotal % 11;
                }
                ultimoDigitoCalc = (comple - residuo) % 10;
                ultimoDigitoRUC = parseInt(ruc.charAt(ultimoIndex), 0);
                if (ultimoDigitoRUC !== ultimoDigitoCalc) {
                    return false;
                }
                return true;
            };
            if (!formula_ruc(numero)) {
                return false;
            }
            return true;
        }

        if (!val_ruc(control.value)) {
            return { 'invalidRuc': true };
        }
        return null;
    }

}
