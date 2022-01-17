import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

function padNumber(value: number) {
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    } else {
        return '';
    }
}

function isNumber(value: any): boolean {
    return !isNaN(toInteger(value));
}

function toInteger(value: any): number {
    return parseInt(`${value}`, 10);
}

@Injectable()
export class NgbDatePtParserFormatter extends NgbDateParserFormatter {
    day: number;
    month: number;
    year: number;

    parse(value: string): NgbDateStruct {
        if (value.length <= 10) {
            value = value.split('/').join('');

            if (value.length === 2) {
                // tslint:disable-next-line:radix
                this.day = parseInt(value.substr(0, 2));
                return { year: null, month: null, day: this.day };
            } else if (value.length === 4) {
              // tslint:disable-next-line:radix
                this.month = parseInt(value.substr(2, 2));
                return { year: null, month: this.month, day: null };
            } else if (value.length === 8) {
              // tslint:disable-next-line:radix
                this.year = parseInt(value.substr(4, 4));
                return { year: this.year, month: this.month, day: this.day };
            }
        }
        return null;
    }

    format(date: NgbDateStruct): string {
        return `${date.day}/${date.month}/${date.year}`;
    }
}
