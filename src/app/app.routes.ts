import { Routes } from '@angular/router';
import { TestComponent } from '../components/test/test.component';
import { LoginComponent } from '../components/login/login.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { CreateIssueComponent } from '../components/create-issue/create-issue.component';
import { IssueViewTableComponent } from '../components/issue-view-table/issue-view-table.component';

export const routes: Routes = [
  {
    path:"",
    redirectTo:"login",
    pathMatch:"full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: SidenavComponent,
    children:[
      {
        path:"create",
        component:CreateIssueComponent
      },
      {
        path:"viewIssue",
        component:IssueViewTableComponent
      }
    ]
  },

];
