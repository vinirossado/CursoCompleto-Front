import { Component, Injectable } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const I18N_VALUES = {
    'pt-br': {
        weekdays: ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'],
        months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    },
};

@Injectable()
export class I18n {
    language = 'pt-br';
}

@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {
    constructor(private _i18n: I18n) {
        super();
    }

    getDayAriaLabel(date: NgbDateStruct): string {
        return `${date.day}-${date.month}-${date.year}`;
    }

    getWeekdayShortName(weekday: number): string {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    }

    getMonthShortName(month: number): string {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    }

    getMonthFullName(month: number): string {
        return this.getMonthShortName(month);
    }
}
