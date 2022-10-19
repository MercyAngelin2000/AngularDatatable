import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mode = false;
  id:any;
  constructor(private router:Router,private actroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.actroute.snapshot.params['id'];
  }
  userprofile(){
    
    this.router.navigate(['home/userprofile',{"id":this.id}])
    
  }
  datatable(){
    this.router.navigate(['home/table'])
  }
  logout(){
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'logout'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/'])
      
      }
     
    });
    
  }
 

}
