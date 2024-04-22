import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueViewTableComponent } from './issue-view-table.component';

describe('IssueViewTableComponent', () => {
  let component: IssueViewTableComponent;
  let fixture: ComponentFixture<IssueViewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssueViewTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IssueViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
