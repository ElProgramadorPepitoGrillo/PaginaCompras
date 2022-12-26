import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaComprasComponent } from './Components/PaginaCompras/PaginaCompras.component';
import { PaginaErrorComponent } from './Components/PaginaError/PaginaError.component';
import { PaginaRegistroComponent } from './Components/PaginaRegistro/PaginaRegistro.component';


const routes: Routes = [
  {
    path:'',component:PaginaRegistroComponent
  },
  {
    path:'2',component:PaginaErrorComponent
  },
  {
    path:'3',component:PaginaComprasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
