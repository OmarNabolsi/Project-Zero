import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './posts/post/post.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'post', component: PostComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
