import { Component,  OnInit} from '@angular/core';
import { Course } from '../course';

import { CourseService } from '../course.service'; 

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  implements OnInit {
  courses: Course[] = [];
  error = '';
  success = '';
  course: Course= {ID:0, courses_name:'', p_date:0 , discription:'', Upload_path:''};
        
  constructor(private courseService: CourseService) {
  }
          ngOnInit(){
            this.getCourse();
          }
          getCourse(): void {
            this.courseService.getAll().subscribe(
              (data: Course[])=> {
                this.courses =data;
                console.log(data);
                this.success = 'successful retrieval of the list';
              },
            );
          }

}
