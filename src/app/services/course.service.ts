import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable} from "rxjs";

import { course } from '../interface/course';
import { coursesList } from '../interface/courseList';
import { progress } from '../interface/progress';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient:HttpClient) { }
  getAllMyCoursesList():Observable<coursesList[]>{
    return this.httpClient.get<coursesList[]>(`http://localhost:8080//api/addassignment/findallcourses`);
  }

  getAllCourses():Observable<course[]>{
    return this.httpClient.get<course[]>('http://localhost:8080/api/course/getallcourses')
  }

  postProgress(userId:any, courseId:any, comhours:number):Observable<progress>{
    return this.httpClient.post<progress>(`http://localhost:8080/api/addcourse/addprogress/${userId}/${courseId}/${comhours}`,httpOptions);
  }
  
}


