import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path:'login',
        canActivateChild:[publicGuard],
      loadChildren:()=> import("./auth/auth.routes")
    },

    {
        path:'dashboard',
        canActivateChild:[privateGuard],
      loadComponent:()=> import("./dashboard/dashboard.component"),
      children:[
        {
            path:'',
           loadComponent:() =>import("./dashboard/start/start.component"),
        },
        {
            path:'catalogs',
           loadComponent:() =>import("./dashboard/catalogs/catalogs.component"),
        },
        {
            path:'**',
            redirectTo:'',
          },
      ]
    },


    {
        path:'**',
        redirectTo:'dashboard',
      },
    {
      path:'',
      redirectTo:'dashboard',
      pathMatch:'full'
    },
 
];
