import { Routes } from '@angular/router';
import { TestComponent } from '../components/test/test.component';
import { LoginComponent } from '../components/login/login.component';

export const routes: Routes = [
  {
    path: "dashboard",
    title: "Dashboard :: SnapBug",
    component: TestComponent
  },
  {
    path: "issue",
    title: "Issue :: SnapBug",
    component: TestComponent
  },
  {
    path: "login",
    title: "login :: SnapBug",
    component: LoginComponent
  }
];
