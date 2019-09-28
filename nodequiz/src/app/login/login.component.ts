import { Component, OnInit, Injectable } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 employeeLogin:FormGroup;
  errorMessage="Error"

ngOnInit() {
  this.employeeLogin = new FormGroup({
    employeeId: new FormControl('')
  })
}

  constructor(private http:HttpClient) {

   }
loginEmployee(employeeLogin:FormGroup){
  const employeeId=employeeLogin.value.employeeId
console.log(employeeId)
  this.http.get('/api/employees/'+ employeeId).subscribe(res=>{
    if(res){
      console.log('user is authenticated')
    }else{
    console.log('The employee you entered does not exist try again');
    }
  })
}

}
