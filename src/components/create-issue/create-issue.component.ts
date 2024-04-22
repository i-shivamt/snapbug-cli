import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IssueService } from '../../services/issue.service';
import { Modules } from '../../interface/modules';
import { Submodule } from '../../interface/submodule';
import { Screens } from '../../interface/screens';
import { Severity } from '../../interface/severity';
import { Type } from '../../interface/type';
import { Title } from '@angular/platform-browser';
import { CreateIssue } from '../../interface/create-issue';

@Component({
  selector: 'app-create-issue',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-issue.component.html',
  styleUrl: './create-issue.component.css',
})
export class CreateIssueComponent {
  form!: FormGroup;
  modulesList: Modules[] = [];
  subModuleList: Submodule[] = [];
  screenList: Screens[] = [];
  severityList: Severity[] = [];
  typeList: Type[] = [];
  createIssue!:CreateIssue;

  constructor(private issueService: IssueService , private fb: FormBuilder) {
 
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      // Text inputs
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      expectation: new FormControl('', Validators.required),
      // expectedOutput: new FormControl('', Validators.required),
      // actualOutput: new FormControl('', Validators.required),
      // Dropdowns
      module: new FormControl('', Validators.required),
      subModule: new FormControl('', Validators.required),
      screen: new FormControl('', Validators.required),
      severity: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    });
    this.issueService.getModule().subscribe((res) => {
      this.modulesList = res;
    });

    this.issueService.getSeverity().subscribe((res) => {
      this.severityList = res;
    });
    this.issueService.getType().subscribe((res) => {
      this.typeList = res;
    });
  }

  getSubModule(moduleId: any): void {
    this.issueService.getSubModule(moduleId.target.value).subscribe((res) => {
      this.subModuleList = res;
      console.log(this.subModuleList);
    });
  }

  getScreen(event: any) {
    this.issueService.getScreen(event.target.value).subscribe((res) => {
      this.screenList = res;
    });
  }

  onSubmit() {
    this.createIssue=this.form.value
    this.issueService.createIssue(this.createIssue).subscribe((res)=>{
      console.log(res);
    })
  }

  onReset() {
    this.form.reset();
  }
}
