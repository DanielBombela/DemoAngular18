import { Routes } from "@angular/router";

export default [
    {
        path:'',
        loadComponent: () => import('./signin/signin.component')
    }
] as Routes