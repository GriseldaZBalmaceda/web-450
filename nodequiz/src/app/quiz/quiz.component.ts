import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
quizId:any;
quiz:any;
currentQuestion :any;
currentChoices:any;

  constructor(private route:ActivatedRoute,private http:HttpClient) {
    this.quizId= parseInt(this.route.snapshot.paramMap.get("id"))
    this.http.get('/api/quiz/'+ this.quizId).subscribe(res=>{
      if(res){
      console.log(res)
      this.quiz=res;
      this.currentQuestion=this.quiz.questions[0].question
      this.currentChoices=this.quiz.questions[0].choices
        //if authenticated we set a cookie and allow the user to navigate to the dashboard
      }else{
        //if not authenticated the user recieves an error message
    }

   })
  }

  ngOnInit() {
  }

}
