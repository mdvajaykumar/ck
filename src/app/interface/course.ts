export interface course {
      courseId:number,
      trainingPlatform:string,
      courseName:string,
      platformName:string,
      courseUrl:string,
      learningHours:number,
      courseAssignment:{
        assignmentId?:number,
        userId:number,
        startDate:string,
        endDate:string,
        category:string,
        trainingType:string,
        progress:number,
        courseId:number,
        LocalDateTime:string,
        learningHours:number,
        courseName:string
      }
      
  }