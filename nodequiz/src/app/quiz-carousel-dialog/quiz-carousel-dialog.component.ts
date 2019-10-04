import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {DashboardComponent} from '../dashboard/dashboard.component'
@Component({
  selector: 'app-quiz-carousel-dialog',
  templateUrl: './quiz-carousel-dialog.component.html',
  styleUrls: ['./quiz-carousel-dialog.component.css']
})
export class QuizCarouselDialogComponent implements OnInit {
fromPage:any
  constructor( public dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
this.fromPage=data.sentQuizId
     }

  ngOnInit() {
  }

}
