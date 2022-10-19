import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SubserviceService } from 'src/app/service/subservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  public showPassword!: boolean 
  // public showPasswordOnPress!: boolean;
  data: any;id:any;
  
  constructor(private router:Router,private subService:SubserviceService,private fb:FormBuilder) { 
  
  }

  ngOnInit(): void {   
    this.loginForm =this.fb.group({
      email:['',Validators.required],
      pwd:['',Validators.required]

    })
  }

  onSubmit(){
    console.log("Success",this.loginForm.value)
    if(this.loginForm.valid ){
      this.subService.login(this.loginForm.value).subscribe(data =>{
        this.data = data;
        this.id = this.data.id;
        this.router.navigate(['/home',{"id":this.id}])    
      },err =>
        {
          alert("invalid credentials")
         });

}else{
  alert("details cannot be empty")
}

  }
}
