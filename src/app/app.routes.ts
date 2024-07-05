import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: 'principal', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'principal', pathMatch: 'full' }, // Redireciona para 'inicio' por padrão
  { path: '**', redirectTo: 'principal' }, // Redireciona para 'inicio' para rotas desconhecidas
];
