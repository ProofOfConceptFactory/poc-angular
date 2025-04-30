import { Routes } from '@angular/router';
import {AnotherPageComponent} from './another-page/another-page.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'another-page',
    component: AnotherPageComponent,
    title: 'Another page',
  },
];
