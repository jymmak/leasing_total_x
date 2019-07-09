import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
    transform(value: string, limit: number = 25, ellipsis: any = '...'): string {
        let text: any = "";
        if (value.length >= limit) {
            text = value.substr(0, limit - 3) + ellipsis;
        } else {
            text = value
        }
        return text;
    }
}