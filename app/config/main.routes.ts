import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../components/login/login.component';

const routes : Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    // map '/' to '/login' as our default router
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
] 

export const routing = RouterModule.forRoot(routes);