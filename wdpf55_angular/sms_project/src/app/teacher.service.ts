import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {


  baseUrl = 'http://localhost/wdpf55_angular/sms_project/api';

  constructor(private http: HttpClient) {}
    getAll() {
      return this.http.get(`${this.baseUrl}/teacher.php`).pipe(
        map((res: any)=> {
          return res['data'];
        })
      );
  
}

   }

