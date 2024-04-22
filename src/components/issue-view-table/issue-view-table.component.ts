import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-issue-view-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './issue-view-table.component.html',
  styleUrl: './issue-view-table.component.css'
})
export class IssueViewTableComponent {
  items = [
    { col1: 'Data 1.1', col2: 'Data 1.2', col3: 'Data 1.3', col4: 'Data 1.4' },
    { col1: 'Data 2.1', col2: 'Data 2.2', col3: 'Data 2.3', col4: 'Data 2.4' },
    
  ];
}
