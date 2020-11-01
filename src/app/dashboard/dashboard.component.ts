import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'ngSlick';


   slides = [342, 453, 846, 855, 234, 564, 744, 243];

   slideConfig = {
     "slidesToShow": 1,
     "slidesToScroll": 1,
     "nextArrow": "<div class='nav-btn next-slide'></div>",
     "prevArrow": "<div class='nav-btn prev-slide'></div>",
     "dots": true,
     "infinite": false,
     "autoPlay":true
   };

   slideConfig2 = {
     "slidesToShow": 5,
     "slidesToScroll": 1,
     "nextArrow": "<div class='nav-btn next-slide '></div>",
     "prevArrow": "<div class='nav-btn prev-slide'></div>",
     "dots": true,
     "infinite": false
   };
   slideConfig3 = {
     "slidesToShow": 3,
     "slidesToScroll": 1,
     "nextArrow": "<div class='nav-btn next-slide '></div>",
     "prevArrow": "<div class='nav-btn prev-slide'></div>",
     "dots": true,
     "infinite": false
   };


   slickInit(e) {
     console.log('slick initialized');
   }

   breakpoint(e) {
     console.log('breakpoint');
   }

   afterChange(e) {
     console.log('afterChange');
   }

   beforeChange(e) {
     console.log('beforeChange');
   }


}
