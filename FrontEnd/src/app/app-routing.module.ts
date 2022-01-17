import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './pages/public/public/public.component';
import { MainComponent } from './pages/public/main/main.component';
import { VeiculosComponent } from './pages/public/veiculos/veiculos.component';
import { VeiculosListaComponent } from './pages/public/veiculos/veiculos-lista/veiculos-lista.component';

// A rota com ** sempre DEVERA ser a ultima;
const routes: Routes = [
  { path: 'veiculos/novo', component: VeiculosComponent},
  { path: 'veiculos/:id', component: VeiculosComponent},
  { path: 'veiculos', component: VeiculosListaComponent},
  { path: '**', component: PublicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
