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
  totalElements!:number;
  totalPages:number[]=[];
  currentPage:number=1;
  issues: PageContent<GetIssues>={
    content: [],
    totalElements: 0,
    totalPages: 0
  }
  constructor(private issueService: IssueService) {}

  ngOnInit(): void {
    this.issueService.getIssuesForPagination(1).subscribe((res) => {
      this.issues = res;
      this.totalPages=Array(this.issues.totalPages).fill(1).map((x,i)=>i+1);
      console.log(this.totalPages);
    });
  }

  getIssueDataPaginatio(page:number){
    this.issueService.getIssuesForPagination(page).subscribe((res) => {
      this.issues = res;
      this.currentPage=page;
    });
  }
}
