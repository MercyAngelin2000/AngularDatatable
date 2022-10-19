import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubserviceService } from 'src/app/service/subservice.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  data:any;

  constructor( private subservice:SubserviceService,private router:Router) { }

  ngOnInit(): void {
  this.subservice.retrieve_sclprofile().subscribe((arg: any) =>{
    this.data=arg;
    console.log(this.data);
    
  })
  }
  update(id:any){
    this.router.navigate(['home/sclprofile',{"id":id}])
  }
  delete(id:any){
    this.subservice.del(id).subscribe((arg:any) =>{
      alert("deleted successfully")
      // this.router.navigate(['/table
    });
    location.reload();

  }
  add(){
    this.router.navigate(['home/sclprofile'])

  }
  viewall(id:any){
    this.router.navigate(['home/sclprofile',{"id":id,"status":"view"}])

  }

}
