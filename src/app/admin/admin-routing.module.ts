import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecordsComponent } from './records/records.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'recordss',component:RecordsComponent},
  {path:'add',component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
