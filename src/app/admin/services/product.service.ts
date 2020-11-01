import { Injectable } from '@angular/core';
import { AdminFetchService } from './admin-fetch.service';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private fetcher: AdminFetchService) { }

  addItem(banner){
    let image = new FileReader();
    const form_Data = new FormData();
    // form_Data.append('productName', item.productName);
    // form_Data.append('mrp', item.mrp);
    // form_Data.append('price', item.price);
    // form_Data.append('color', item.color);
    // form_Data.append('brand', item.brand);
    // form_Data.append('itemDimension', item.itemDimension);
    // form_Data.append('itemWeight', item.itemWeight);
    // form_Data.append('voltage', item.voltage);
    // form_Data.append('capacity', item.capacity);
    form_Data.append('banner',banner,banner.name);
    // formData.append('label',item.label)
    // formData.append('Features',item.features)
    return this.fetcher.admin_post('addItem',form_Data);
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else {
      errorMessage = `Error Code ${error.status}\n Message:{error:message}`
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
