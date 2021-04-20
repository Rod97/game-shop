import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {
  transform(plainCreditCard: string): string {
    
    let cardText = "**** **** **** " + plainCreditCard.slice(-4);

    return cardText;
  }
}
