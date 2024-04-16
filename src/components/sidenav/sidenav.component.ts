import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  firstname = 'Anshuman';
  role = 'Admin';
  links = [
    { title: "Dashboard", path: "/dashboard", icon: "dashboard", active: true },
    { title: "Issue", path: "/issue", icon: "bug_report", active: false },
    { title: "Reports", path: "/reports", icon: "lab_profile", active: false },
    { title: "Users", path: "/users", icon: "manage_accounts", active: false },
    { title: "Masters", path: "/masters", icon: "database", active: false }
  ];
}
