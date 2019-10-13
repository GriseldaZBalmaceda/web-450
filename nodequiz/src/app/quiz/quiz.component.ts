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
questions:any;
currentChoices:any;
quizResults:any;
questionNumber=0;
qs:any=[];
q:any=[];
  constructor(private route:ActivatedRoute,private http:HttpClient) {
    this.quizId= parseInt(this.route.snapshot.paramMap.get("id"))
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
  onSubmit(form) {
    this.quizResults = form;
    this.quizResults['quizId'] = this.quizId; // add the quizId to the quizResults object

    // const dialogRef = this.dialog.open(QuizResultDialogComponent, {
    //   data: {
    //     quizResults: this.quizResults
    //   },
    //   disableClose: true,
    //   width: "800px"
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result === "confirm") {
    //     console.log(this.quizResults);
    //   }
    // });
  }
  ngOnInit() {
  }

}
