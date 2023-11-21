import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { map } from 'rxjs';

import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl = 'http://localhost/wdpf55_angular/sms_project/api';

  constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(`${this.baseUrl}/course.php`).pipe(
          map((res: any)=> {
            return res['data'];
          })
        );
    
  }
}
