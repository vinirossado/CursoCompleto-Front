export class SharedConversions {
    static convertDate(input: DateIO, output: DateIO, date: any) {
        if (input == DateIO.cs && output == DateIO.js) {
            let day = 0;
            let month = 0;
            let year = 0;
  
            if (date.indexOf('-') >= 0) {
                const dateParts = date.trim().split('-');
  
                day = parseInt(dateParts[2]);
                month = parseInt(dateParts[1]);
                year = parseInt(dateParts[0]);
            } else if (date.indexOf('/') >= 0) {
                const dateParts = date.trim().split('/');
  
                day = parseInt(dateParts[0]);
                month = parseInt(dateParts[1]);
                year = parseInt(dateParts[2]);
            }
  
            return new Date(year, month - 1, day);
        } else if (input == DateIO.cs && output == DateIO.ngb) {
            let day = 0;
            let month = 0;
            let year = 0;
  
            if (date.indexOf('-') >= 0) {
                const dateParts = date.trim().split('-');
  
                day = parseInt(dateParts[2]);
                month = parseInt(dateParts[1]);
                year = parseInt(dateParts[0]);
            } else if (date.indexOf('/') >= 0) {
                const dateParts = date.trim().split('/');
  
                day = parseInt(dateParts[0]);
                month = parseInt(dateParts[1]);
                year = parseInt(dateParts[2]);
            }
  
            return { day, month, year };
        } else if (input == DateIO.js && output == DateIO.ngb) {
            return { day: date.getDate(), month: date.getMonth() + 1, year: date.getFullYear() };
        } else if (input == DateIO.js && output == DateIO.cs) {
            return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        } else if (input == DateIO.ngb && output == DateIO.cs) {
            return `${date.year}-${date.month}-${date.day}`;
        } else if (input == DateIO.ngb && output == DateIO.js) {
            return new Date(date.year, date.month - 1, date.day);
        } else {
            console.error('Impossível efetuar a conversão');
        }
    }
  }
  
  export enum DateIO { cs, js, ngb }