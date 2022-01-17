import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Veiculo } from '../models/veiculos.model';

@Injectable()
export class VeiculosService {



    constructor(
        private http: HttpClient,
        private router: Router,
    ) {}

    listarVeiculos(): any {
      return this.http.get<any>(`${environment.api}veiculos/veiculos/`);
    }

    cadastrarVeiculo(veiculo: Veiculo): Observable<Veiculo[]> {
        return this.http.post<Veiculo[]>(`${environment.api}veiculos/veiculo`, veiculo);
    }

    encontrarVeiculo(veiculoId: number): Observable<Veiculo>{
      return this.http.get<Veiculo>(`${environment.api}veiculos/veiculo/${veiculoId}`)
    }

    deletarVeiculo(veiculoId: number): Observable<Veiculo>{
      return this.http.delete<Veiculo>(`${environment.api}veiculos/${veiculoId}`)
    }


}
