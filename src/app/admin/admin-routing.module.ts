import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';

const routes: Routes = [
  { 
    path: '',
    component: NavigationComponent,
    children: [
      { path: 'perfil', component: PerfilComponent },
      { path: 'usuario', component: UsuarioComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
