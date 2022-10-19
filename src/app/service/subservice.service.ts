import { Injectable } from '@angular/core';
import { MainserviceService } from './mainservice.service';

@Injectable({
  providedIn: 'root'
})
export class SubserviceService {

  constructor(private mainservice:MainserviceService) { }
  login(data:any){
    const url="/samplogin"
    return this.mainservice.login(data,url); 
  }
  upsclprofile(data:any,id:any){
    const url="/updatesclprofile/"+id;
    return this.mainservice.upsclproile(data,url);
  }
  addsclprofile(data:any){
    const url="/addsclprofile";
    return this.mainservice.addsclproile(data,url);
  }
  retrieve_sclprofile(){
    const url="/retsclprofile"
    return this.mainservice.retsclprofile(url);

  }
  retsclprofile(id:any){
    console.log(id);
    
    const url="/specificsclprofile/"+id;
    return this.mainservice.specificsclprofile(url);
  }
  del(id:any){
    const url ="/delprofile/"+id;
    return this.mainservice.delprofile(url);

  }
  register(data:any){
    const url="/register"
    return this.mainservice.post(data,url); 
  }
  userprofile(id:any){
    const path="/userprofile/"+id
    const url=path
    console.log(url);
    
    return this.mainservice.getmethod(url);
  }

  up_userprofile(data:any,id:any){
    const url="/up_userprofile/"+id
    // const url=con+data
    return this.mainservice.up_userprofile(url,data);
  }
  del_userprofile(id:any){
    const url="/del_userprofile/"+id
    return this.mainservice.del_userprofile(url);
  }
  

  }
