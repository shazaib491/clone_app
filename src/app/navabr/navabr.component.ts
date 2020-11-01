import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthGuard} from '../auth.guard';

@Component({
  selector: 'app-navabr',
  templateUrl: './navabr.component.html',
  styleUrls: ['./navabr.component.css']
})
export class NavabrComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }
  data: [] = [];
  ngOnInit(): void {

}
// toggleBadgeVisibility() {
//    this.hidden = !this.hidden;
//  }


    logout(){
      this.auth.logout();
      this.router.navigate(['./login']);
    }
  }
