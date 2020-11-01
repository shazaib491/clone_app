import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
export interface UserName{
    email:String;
    mobile:String;
    password:String;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(private auth:AuthService) { }
data:any=[];
  ngOnInit(): void {
    if(this.data){
    this.auth.profile().subscribe((res)=>{
      this.data=res
    })
  }
  }



}
