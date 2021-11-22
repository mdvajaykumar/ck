import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallcoursesComponent } from './getallcourses.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { CoursesService } from '../services/course.service';
import { of } from 'rxjs';

describe('GetallcoursesComponent', () => {
  let component: GetallcoursesComponent;
  let fixture: ComponentFixture<GetallcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,ReactiveFormsModule,FormsModule],
      declarations: [ GetallcoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //    expect(component).toBeTruthy();
  //  });

  //  it('testing function',()=>{
  //    expect(component.getCourse(1)).toBe(1)
  //  })

});
