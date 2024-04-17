import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Modules } from '../interface/modules';
import { Submodule } from '../interface/submodule';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({ providedIn: 'root' })
export class IssueService {
  SPIRNG_SERVER_URI = 'http://localhost:3001/api/v1';
  constructor(private http: HttpClient) {}

  getModule() {
    return this.http.get<[Modules]>(`${this.SPIRNG_SERVER_URI}/module`);
  }

  getSubModule(moduleId: number) {
    return this.http.get<[Submodule]>(
      `${this.SPIRNG_SERVER_URI}/submodule/${moduleId}`
    );
  }
}
