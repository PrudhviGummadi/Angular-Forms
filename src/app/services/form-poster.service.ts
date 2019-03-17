
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from 'src/models/Employee.model';
import { Observable, throwError } from 'rxjs';
import {  tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FormPosterService {

  constructor(private http:HttpClient) 
  { 

  }

  postEmployeeForm(employee:IEmployee):Observable<IEmployee>{
    console.log("Posting the employee model to service.."+employee);
   
      // let body = JSON.stringify({ employee });
      let headers = new HttpHeaders();
      headers.append("Content-Type","application/json");
        
      return this.http.post<IEmployee>('http://localhost:3100/postEmployeeForm',employee, {headers}).pipe(
        tap(
          (data)=>{
            return this.processData(data);
          },
          (error:HttpErrorResponse)=>{
            this.handleError(error);
          }
        )
      );
  }

  getLanguages():Observable<any>{
    return this.http.get<any>("http://localhost:3100/language").pipe(
      tap(
        (data)=>{
          return this.processGetData(data);
        },
        (error:HttpErrorResponse)=>{
          this.handleError(error);
        }
      )
    );
  }

  private processData(data){
  return data.fields;
  }

  private processGetData(data){
    console.log("processing data: "+JSON.stringify(data));
    return data.data;
    }


  private handleError(error:HttpErrorResponse){
    console.log("Error is "+error);
    return throwError(error.message);
  }
}
