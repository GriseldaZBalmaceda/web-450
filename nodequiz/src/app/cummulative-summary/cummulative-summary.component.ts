/**
 * Author: Griselda
 * Date: 9/24/2019
 * Description: Cummulative Summary
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cummulative-summary',
  templateUrl: './cummulative-summary.component.html',
  styleUrls: ['./cummulative-summary.component.css']
})
export class CummulativeSummaryComponent implements OnInit {

  //example from angular material, wanted to see how the table will be implemented
   PeriodicElement = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private router:Router,private http:HttpClient) {
    this.http.get('/api/summary').subscribe(res=>{
      if(res){
        console.log(res)
      }else{
        //if not authenticated the user recieves an error message
     console.log('error')
    }})

  }

  ngOnInit() {
  }

}
