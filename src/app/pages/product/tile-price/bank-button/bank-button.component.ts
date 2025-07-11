import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface BankDisplay {
  image: string;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
}

@Component({
  selector: 'app-bank-button',
  imports: [NgIf],
  templateUrl: './bank-button.component.html',
  styleUrl: './bank-button.component.css'
})
export class BankButtonComponent {
  showModal: boolean = false;
  selectedBank: BankDisplay = { 'image': '', 'h1': '', 'h2': '', 'h3': '', 'h4': '', 'h5': '' };

  openModal(bank: string) {
    this.selectedBank = this.getBankDisplayName(bank);
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  getBankDisplayName(bank: string): BankDisplay {
    const names: { [key: string]: BankDisplay } = {
      rozetka: { image: "https://content2.rozetka.com.ua/payments_methods/logo/original/534616559.jpg", h1: 'Оплатити частинами від Rozetka', h2: '1. Банківські картки не потрібні', h3: '2. Оформлення повністю онлайн', h4: '3. Без першого внеску. Перший платіж через місяць', h5: '4. Без прихованих комісій та переплат' },
      privatBank: { image: 'https://content2.rozetka.com.ua/payments_methods/logo/original/437858387.jpg', h1: 'Оплата частинами від ПриватБанк', h2: '1. Наявність картки "Універсальна"', h3: '2. Доступний кредитний ліміт за сервісом "Оплата частинами"', h4: '3. Перший платіж буде списаний у день оформлення', h5: 'Подарунки не надаються при купівлі товару в 0,01% кредит чи оплату частинами.' },
      pumb: { image: 'https://content2.rozetka.com.ua/payments_methods/logo/original/290040692.jpg', h1: 'ПУМБ: Сплачуйте частинами', h2: '1. Мати застосунок ПУМБ online', h3: '2. Перший платіж через місяць', h4: '3. За потреби збільшуйте строк розстрочки при оформленні в ПУМБ Online', h5: 'Використовуйте номер мобільного телефону зареєстрований у ПУМБ' },
      monoBank: { image: 'https://content1.rozetka.com.ua/payments_methods/logo/original/450067950.jpg', h1: 'Покупка частинами monobank', h2: '1. Наявність кредитної картки від Монобанку', h3: '2. Доступний кредитний ліміт за сервісом "Оплата частинами"', h4: '3. Перший платіж буде списаний у день оформлення', h5: 'Подарунки не надаються при купівлі товару в 0,01% кредит чи оплату частинами.' },
      Sense: { image: 'https://content2.rozetka.com.ua/payments_methods/logo/original/565233558.jpg', h1: 'Sense Bank. Легка розстрочка', h2: '1. Мати кредитну картку Sense Bank.', h3: '2. З кредитної картки одразу списується вся сума покупки.', h4: '3. Номер телефону повинен відповідати номеру у Sense Bank.', h5: '4. Підтвердження покупки відбувається в додатку Банку.' },
      Abank: { image: "https://content.rozetka.com.ua/payments_methods/logo/original/254250966.jpg", h1: 'А-Банк. Плати частинами', h2: '1. Перевір наявність кредитної картки Абанк.', h3: '2. У мобільному застосунку ABank24 підтверджуй оформлення кредиту.', h4: '3. Перший платіж буде списано з кредитної картки в момент купівлі, а наступний — за місяць.', h5: '' },
      oshad: { image: 'https://content2.rozetka.com.ua/payments_methods/logo/original/406455401.jpg', h1: 'ОЩАДБАНК: Виплати частинами', h2: '1. Наявність картки «Моя кредитка» чи MORE', h3: '2. Наявність на картці окремого від кредитної лінії ліміту розстрочки', h4: '3. Перший платіж згідно графіку в Мобільному Ощаді - через 30 днів', h5: '' },
      UKRSIBBANK: { image: 'https://content2.rozetka.com.ua/payments_methods/logo/original/380528671.jpg', h1: 'UKRSIBBANK: Виплати частинами', h2: '1. Наявність кредитної картки від UKRSIBBANK', h3: '2. Доступний вільний кредитний ліміт у розмірі вартості покупки', h4: '3. Відсутні платежі при оформленні, перший платіж – через місяць', h5: '' },
      otp: { image: 'https://content2.rozetka.com.ua/payments_methods/logo/original/300740056.png', h1: 'ОТП Банк: Оплата частинами', h2: '1. Мати картку ОТП Банку', h3: '2. Перевірити доступний ліміт розстрочки в застосунку', h4: '3. Підтвердити розстрочку в застосунку, ознайомившись з умовами', h5: '4. Перший платіж - через 30 днів' }
    };
    return names[bank] || { h1: bank, h2: '' };
  }
}