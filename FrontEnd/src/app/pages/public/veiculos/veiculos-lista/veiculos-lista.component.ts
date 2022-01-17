import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/models/veiculos.model';
import { VeiculosService } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiculos-lista',
  templateUrl: './veiculos-lista.component.html',
  styleUrls: ['./veiculos-lista.component.scss']
})
export class VeiculosListaComponent implements OnInit {
   veiculos: Veiculo[] = [];

  constructor(
    private veiculoService: VeiculosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buscarVeiculos()
  }

  buscarVeiculos() {
    this.veiculoService.listarVeiculos()
      .toPromise()
      .then(veiculos => {
        console.log(veiculos);
        this.veiculos = veiculos;
      });
  }

  selecionar(id: number) {
    this.router.navigate(['/veiculos', id]);
  }

  novo() {
    this.router.navigate(['/veiculos/novo']);
  }

}
