import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teacher: Teacher[] = [];
  error = '';
  success = '';
  teachers: Teacher= {ID:0, teacher_name:'', t_date:0 , discription:'', upload_path:''};
        
  constructor(private teacherService: TeacherService) {
  }
          ngOnInit(){
            this.getCourse();
          }
          getCourse(): void {
            this.teacherService.getAll().subscribe(
              (data: Teacher[])=> {
                this.teacher =data;
                console.log(data);
                this.success = 'successful retrieval of the list';
              },
            );
          }

}
