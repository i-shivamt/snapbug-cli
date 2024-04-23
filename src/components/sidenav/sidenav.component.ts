import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DataCommunicationService } from '../../services/data-communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  firstname: string = '';
  role: string = '';
  private currentUserSubscription!: Subscription;
  private currentRoleSubscription!: Subscription;

  constructor(private dataCom: DataCommunicationService) {}

  ngOnInit(): void {
    this.currentUserSubscription = this.dataCom.currentUserSubject.subscribe({
      next: (data: string) => {
        this.firstname = data;
      },
    });

    this.currentRoleSubscription = this.dataCom.currentRoleSubject.subscribe(
      (res) => {
        this.role = res;
      }
    );
  }

  links = [
    { title: 'Dashboard', path: '/dashboard', icon: 'dashboard', active: false },
    { title: 'Issue', path: '/viewIssue', icon: 'bug_report', active: true },
    { title: 'Reports', path: '/reports', icon: 'lab_profile', active: false },
    { title: 'Users', path: '/users', icon: 'manage_accounts', active: false },
    { title: 'Masters', path: '/masters', icon: 'database', active: false },
  ];

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
    this.currentRoleSubscription.unsubscribe();
  }
}
