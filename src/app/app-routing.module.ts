import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'moroccan-cities',
    loadChildren: () => import('./moroccan-cities/moroccan-cities.module').then( m => m.MoroccanCitiesPageModule)
  },
  {
    path: 'oujda',
    loadChildren: () => import('./oujda/oujda.module').then( m => m.OujdaPageModule)
  },
  {
    path: 'rabat',
    loadChildren: () => import('./rabat/rabat.module').then( m => m.RabatPageModule)
  },
  {
    path: 'casa',
    loadChildren: () => import('./casa/casa.module').then( m => m.CasaPageModule)
  },
  {
    path: 'fes',
    loadChildren: () => import('./fes/fes.module').then( m => m.FesPageModule)
  },
  {
    path: 'meknes',
    loadChildren: () => import('./meknes/meknes.module').then( m => m.MeknesPageModule)
  },
  {
    path: 'agadir',
    loadChildren: () => import('./agadir/agadir.module').then( m => m.AgadirPageModule)
  },
  {
    path: 'dakhla',
    loadChildren: () => import('./dakhla/dakhla.module').then( m => m.DakhlaPageModule)
  },
  {
    path: 'tanger',
    loadChildren: () => import('./tanger/tanger.module').then( m => m.TangerPageModule)
  },
  {
    path: 'merzouga',
    loadChildren: () => import('./merzouga/merzouga.module').then( m => m.MerzougaPageModule)
  },
  {
    path: 'souira',
    loadChildren: () => import('./souira/souira.module').then( m => m.SouiraPageModule)
  },
  {
    path: 'marrakech',
    loadChildren: () => import('./marrakech/marrakech.module').then( m => m.MarrakechPageModule)
  },
  {
    path: 'laayoun',
    loadChildren: () => import('./laayoun/laayoun.module').then( m => m.LaayounPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
