import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Modules } from '../interface/modules';
import { Submodule } from '../interface/submodule';
import { Observable } from 'rxjs/internal/Observable';
import { Screens } from '../interface/screens';
import { Severity } from '../interface/severity';
import { Type } from '../interface/type';
import { CreateIssue } from '../interface/create-issue';
import { IssueCreationResponse } from '../interface/issue-creation-response';

@Injectable({ providedIn: 'root' })
export class IssueService {
  SPIRNG_SERVER_URI = 'http://localhost:3001/api/v1';
  constructor(private http: HttpClient) {}

  getModule() {
    return this.http.get<[Modules]>(`${this.SPIRNG_SERVER_URI}/module/`);
  }

  getSubModule(moduleId: number) {
    return this.http.get<[Submodule]>(
      `${this.SPIRNG_SERVER_URI}/submodule/${moduleId}`
    );
  }

  getScreen(subModuleId: number) {
    return this.http.get<[Screens]>(
      `${this.SPIRNG_SERVER_URI}/screen/${subModuleId}`
    );
  }

  getSeverity() {
    return this.http.get<[Severity]>(`${this.SPIRNG_SERVER_URI}/severity/`);
  }

  getType() {
    return this.http.get<[Type]>(`${this.SPIRNG_SERVER_URI}/issue-type/`);
  }

  createIssue(createIssue:CreateIssue): Observable<IssueCreationResponse> {
    return this.http.post<IssueCreationResponse>(`${this.SPIRNG_SERVER_URI}/issue/`,createIssue );
  }
}
