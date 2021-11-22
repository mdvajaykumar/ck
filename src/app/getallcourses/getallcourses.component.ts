import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../services/course.service';
import { MatDialog } from '@angular/material/dialog';
import { course } from '../interface/course';
import { coursesList } from '../interface/courseList';
import { progress } from '../interface/progress';






@Component({
  selector: 'app-courses',
  templateUrl: './getallcourses.component.html',
  styleUrls: ['./getallcourses.component.css'],
  providers:[
    CoursesService
  ]
})
export class GetallcoursesComponent implements OnInit {
  courseList:Array<coursesList>;
  courseArray:Array<course>;
  progressArray:Array<progress>
  j:number=0;


  constructor(private courseService:CoursesService,) {
    this.courseList=new Array<coursesList>();
    this.courseArray =new Array<course>();
    this.progressArray =new Array<progress>();
   }

   getProgress(k:number){
    this.j=k;
   }

  ngOnInit(): void {
   
    this.getAllMyCoursesList()
    this.getAllCourses()
  }
  
  getAllMyCoursesList(){
    this.courseService.getAllMyCoursesList().subscribe((data)=>{this.courseList=data;
      console.log(this.courseList);});
  }

  getAllCourses(){
    this.courseService.getAllCourses().subscribe((data)=>{this.courseArray=data;
    console.log(this.courseArray);});
    }

    getOneProgress(){
      this.courseService.postProgress(this.progressArray[this.j].userId,this.progressArray[this.j].courseId,this.progressArray[this.j].completedHours).subscribe((data)=>{this.progressArray[this.j]=data})
      console.log(this.courseList);
    }
  
  }
  



