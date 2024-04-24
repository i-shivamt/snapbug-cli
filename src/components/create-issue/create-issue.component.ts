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
import { CreateIssue } from '../../interface/create-issue';
import { Subscription } from 'rxjs';

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
  isFormSubmited = false;
  createIssue!: CreateIssue;
  private getModelSubscription!: Subscription;
  private getSubModelSubscription!: Subscription;
  private getScreenSubscription!: Subscription;
  private getSeveritySubscription!: Subscription;
  private getTypeSubscription!: Subscription;

  constructor(private issueService: IssueService, private fb: FormBuilder) {}

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
      submodule: new FormControl('', Validators.required),
      screen: new FormControl('', Validators.required),
      severity: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    });
    this.getModelSubscription = this.issueService
      .getModule()
      .subscribe((res) => {
        this.modulesList = res;
      });

    this.getSeveritySubscription = this.issueService
      .getSeverity()
      .subscribe((res) => {
        this.severityList = res;
      });
    this.getTypeSubscription = this.issueService.getType().subscribe((res) => {
      this.typeList = res;
    });
  }

  getSubModule(moduleId: any): void {
    this.getSubModelSubscription = this.issueService
      .getSubModule(moduleId.target.value)
      .subscribe((res) => {
        this.subModuleList = res;
        console.log(this.subModuleList);
      });
  }

  getScreen(event: any) {
    this.getScreenSubscription = this.issueService
      .getScreen(event.target.value)
      .subscribe((res) => {
        this.screenList = res;
      });
  }

  onSubmit() {
    this.createIssue = this.form.value;
    this.issueService.createIssue(this.createIssue).subscribe((res) => {
      this.isFormSubmited = true;
      this.form.reset();
    });
  }

  onBlurOfSubModule() {
    if (this.form.get('module')?.touched) {
      this.form.get('submodule')?.reset();
      this.form.get('screen')?.reset();
    }
  }

  onReset() {
    this.form.reset();
  }

  ngOnDestroy(): void {
    this.getModelSubscription.unsubscribe();
    this.getScreenSubscription.unsubscribe();
    this.getSeveritySubscription.unsubscribe();
    this.getSubModelSubscription.unsubscribe();
    this.getTypeSubscription.unsubscribe();
  }
}
