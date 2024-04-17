import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-create-issue',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, ],
  templateUrl: './create-issue.component.html',
  styleUrl: './create-issue.component.css',
})
export class CreateIssueComponent {
  form: FormGroup;

  constructor(private issueService:IssueService) {
    this.form = new FormGroup({
      // Text inputs
      input1: new FormControl('', Validators.required),
      input2: new FormControl('', Validators.required),
      input3: new FormControl('', Validators.required),
      // Dropdowns
      dropdown1: new FormControl('', Validators.required),
      dropdown2: new FormControl('', Validators.required),
      dropdown3: new FormControl('', Validators.required),
      dropdown4: new FormControl('', Validators.required),
      dropdown5: new FormControl('', Validators.required),
      dropdown6: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    
    this.issueService.getModule().subscribe((res)=>{
      debugger
      console.log(res);
    })
  }

  onSubmit() {
    console.log('Form Data:', this.form.value);
  }

  onReset() {
    this.form.reset();
  }
}
