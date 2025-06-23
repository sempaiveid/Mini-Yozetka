import { inject, Pipe, PipeTransform } from '@angular/core';
import { PipeService } from '../services/pipe.service';

@Pipe({
  name: 'currency_pipe',
  standalone: true,
  pure: false
})
export class CurrencyPipe implements PipeTransform {
    private pipe_service = inject(PipeService)
    private USD:number = 42;
    private EUR:number = 48;
    transform(value: number):string {
        if(this.pipe_service.currency === "UAH"){
            return `${value} ₴`;
        } else if(this.pipe_service.currency === "EUR"){
            return `${(value / this.EUR).toFixed(2)} €`
        } else if(this.pipe_service.currency === "USD"){
            return `${(value / this.USD).toFixed(2)} $`;
        }
        return value.toString();
    }
}
