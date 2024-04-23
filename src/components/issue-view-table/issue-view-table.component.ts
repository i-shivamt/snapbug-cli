import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IssueService } from '../../services/issue.service';
import { GetIssues } from '../../interface/get-issues';
import { PageContent } from '../../interface/page-content';

@Component({
  selector: 'app-issue-view-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './issue-view-table.component.html',
  styleUrl: './issue-view-table.component.css',
})
export class IssueViewTableComponent {
  issues!: PageContent<GetIssues>;
  constructor(private issueService: IssueService) {}

  ngOnInit(): void {
    this.issueService.getIssues().subscribe((res) => {
      this.issues = res;
      console.log(this.issues);
    });
  }
}
