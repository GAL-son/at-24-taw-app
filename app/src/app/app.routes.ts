import { Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { BlogItemDetailsComponent } from './components/blog-item-details/blog-item-details.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './services/auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'blog',
        component: BlogHomeComponent,
        canActivate: [authGuard]
    },
    {
        path: 'blog/details/:id',
        component: BlogItemDetailsComponent,
    },
    {
        path: 'signup',
        component: SignupComponent
    }
];
