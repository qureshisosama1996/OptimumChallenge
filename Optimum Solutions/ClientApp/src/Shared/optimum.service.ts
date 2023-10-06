import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from './Models/UserData';
import { UpdateData } from './Models/UpdataData';

@Injectable({
  providedIn: 'root'
})
export class OptimumService {

  constructor(private httpclient:HttpClient) { }

  getdata():Observable<any>{
   return this.httpclient.get(`api/optimum/getcustomer`)
  }

  postdata(data:UpdateData):Observable<any>{
    return this.httpclient.post(`api/optimum/savecustomer`,data)

  }

  getdatabyid(id:any):Observable<any>{
    return this.httpclient.get(`api/optimum/getbyid/${id}`)

  }

  updatedatabyid(id:any,data:any):Observable<any>{
    return this.httpclient.post(`api/optimum/updatecustomer/${id}`,data)

  }

  deletedatabyid(id:any):Observable<any>{
    return this.httpclient.delete(`api/optimum/deletecustomer/${id}`)

  }
}
