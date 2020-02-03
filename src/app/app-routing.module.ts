import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then(m => m.HomePageModule),
    canActivate: [LoginGuard]
  },
  {
    path: "list",
    loadChildren: () => import("./list/list.module").then(m => m.ListPageModule)
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then(m => m.LoginPageModule)
  },
  {
    path: 'curso-fiel',
    loadChildren: () => import('./curso-fiel/curso-fiel.module').then( m => m.CursoFielPageModule)
  },
  {
    path: 'kotel-travel',
    loadChildren: () => import('./kotel-travel/kotel-travel.module').then( m => m.KotelTravelPageModule)
  },
  {
    path: 'feligreses',
    loadChildren: () => import('./feligreses/feligreses.module').then( m => m.FeligresesPageModule)
  },
  {
    path: 'recibos',
    loadChildren: () => import('./recibos/recibos.module').then( m => m.RecibosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
