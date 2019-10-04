import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { QuizCarouselDialogComponent } from '../quiz-carousel-dialog/quiz-carousel-dialog.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

quizId:any;
  constructor(public dialog: MatDialog) {
  }

openCarousel():void{
  const dialogRef = this.dialog.open(QuizCarouselDialogComponent,{
width:'500px',
height:'500px',
data:{sentQuizId:{quizName:'IntroToJavaScript'}}  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed' , result);
this.quizId=result.data
  });
}
  ngOnInit() {

  }

}
