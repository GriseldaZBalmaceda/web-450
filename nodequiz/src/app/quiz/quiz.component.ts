import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
quizId:any;
quiz:any;
questions:any;
currentChoices:any;
quizResults:any;
employeeId:string;
questionNumber=0;
selectedAnswers=[]
correctAnswers=[]
qs:any=[];
q:any=[];
  constructor(private route:ActivatedRoute,private router:Router, private cookieService: CookieService,private http: HttpClient) {

    //need to solve why employeeId is not able to show
    this.employeeId = this.cookieService.get('employeeId');
    this.quizId= parseInt(this.route.snapshot.paramMap.get("id"))
    //getting quiz information
    this.http.get('/api/quiz/'+ this.quizId).subscribe(res=>{
      if(res){
      console.log(res)
      this.quiz=res;
        this.questions=this.quiz.questions
      // this.quiz = this.quizzes.filter(q => q.quizId === this.quizId)[0];
      console.log(this.questions);
        //if authenticated we set a cookie and allow the user to navigate to the dashboard
      }else{
        //if not authenticated the user recieves an error message
    }

   })
  }
  //generating form that will be sent via http post
  onSubmit(form) {
    this.quizResults = form;
    this.quizResults['quizId'] = this.quizId;
    this.quizResults['employeeId']=this.employeeId
    console.log(this.quizResults)
    for(const prop in this.quizResults){
    if(this.quizResults.hasOwnProperty(prop)){
      if(prop !== 'employeeId' && prop !== 'quizId' && prop !=='score'){
        this.selectedAnswers.push(this.quizResults[prop].split(';')[0]);
        this.correctAnswers.push(this.quizResults[prop].split(';')[1]);
      }
    }
  }
   this.http.post('/api/results/', {
    employeeId: this.employeeId,
    quizId: this.quizId,
    result: JSON.stringify(form)
  })


  }
goBackToDash(){
  this.router.navigate(['/dashboard'])
}
  ngOnInit() {
  }

}
