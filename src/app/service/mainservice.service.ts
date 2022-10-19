import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders}from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  constructor(private http:HttpClient) { }
   base = "http://127.0.0.1:8000"

  login(data:any,url:any){
    return this.http.post(this.base+url,data); 

  }
  addsclproile(data:any,url:any){
    return this.http.post(this.base+url,data)

  }
  upsclproile(data:any,url:any){
    return this.http.put(this.base+url,data)

  }
  retsclprofile(url:any){
    return this.http.get(this.base+url)
  }
  specificsclprofile(url:any){
    console.log(this.base+url);
    
    return this.http.get(this.base+url)

  }
  delprofile(url:any){
    return this.http.delete(this.base+url)
  }
  post(data:any,url:any){
    return this.http.post(this.base+url,data);
  }   
  up_userprofile(url:any,data:any){
    console.log(this.base+url,data);
    
    return this.http.put(this.base+url,data);
  }

  del_userprofile(url:any){
    return this.http.delete(this.base+url);
  }
  getmethod(url:any){
    return this.http.get(this.base+url);
  }

}

