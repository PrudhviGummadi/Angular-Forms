import { HttpErrorResponse } from '@angular/common/http';
import { FormPosterService } from './services/form-poster.service';
import { Component } from '@angular/core';
import { IEmployee } from 'src/models/Employee.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  languages:string[];
  payments:string[]=["W2","1099"];
  employee:IEmployee={firstName:"sai",lastName:"gummadi",isFullTime:true,paymentType:"W2",primaryLanguage:"Telugu"};

  constructor(private postService:FormPosterService){
    // ["English","Spanish","Telugu","Other"]
    this.postService.getLanguages().subscribe( (data)=>{
      console.log("Success and data is: "+JSON.stringify(data))
      this.languages=data.data.languages;
      console.log("languages is: "+this.languages);
    },
    (error:HttpErrorResponse) =>console.log("Error code is:"+error.error));
  }

  submitForm(model:NgForm){
    this.postService.postEmployeeForm(this.employee).subscribe(
      (data)=>console.log("Success and data is: "+data),
      (error:HttpErrorResponse) =>console.log("Error code is:"+error.error)
    );
  }
}
