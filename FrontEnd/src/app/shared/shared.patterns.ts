export class SharedPatterns {
    // tslint:disable-next-line:max-line-length
    static readonly emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    static readonly cpfCnpjPattern = /^(\d{3}.\d{3}.\d{3}-\d{2})|(\d{2}.\d{3}.\d{3}\/\d{4}-\d{2})$/;
    static readonly cepPattern = /^\d{5}-\d{3}$/;
    static readonly telefonePattern = /^\d{4,5}-\d{4}$/;
    static readonly dddPattern = /^\d{2}$/;
    static readonly dateTimePattern = /^([0-2][0-9]|[3][0-1]){1}\/([0][0-9]|[1][0-2]){1}\/\d{4}\s([0-1][0-9]|[2][0-4]):([0-5][0-9])$/;
    static readonly datePattern = /^([0-2][0-9]|[3][0-1]){1}\/([0][0-9]|[1][0-2]){1}\/\d{4}$/;
  }
  