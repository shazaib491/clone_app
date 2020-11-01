import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { AuthService } from '../auth.service';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  response: string;
  arr: any = [];
  arr1: any = [];

  constructor(private auth:AuthService) {
    // this.uploader = new FileUploader({
      // url: 'http://localhost:3000/product/addItem',
      // itemAlias: 'banner',
      // additionalParameter:
      // {
        // data:this.arr.push(this.fieldArray)
                // color:'red',
        // brand:'topn town',
        // itemDimension:'5* 5',
        // itemWeight:'1kg',
        // voltage:20,
        // capacity:'30'
    //   }
    // });
    // console.log(this.fieldArray);


    // this.hasBaseDropZoneOver = false;
    // this.response = '';
    // this.uploader.response.subscribe(res => this.response = res);
  }
  public fieldArray: Array<any> = [];

  public newAttribute: any = {}

  public storer: any;

  ngOnInit(): void {
  //   this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
  //
  //   this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
  //     console.log('FileUpload:uploaded:', item, status, response);
  //     alert('File uploaded successfully');
  //     console.log(item);
  //   };
  // }
}

  addFiledValue() {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {

    }
    console.log(this.fieldArray);
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1)
  }

  // public fileOverBase(e: any): void {
  //   this.hasBaseDropZoneOver = e;
  // }
  images:any;
  upload(event){
    if(event.target.files.length>0){
      this.images=event.target.files[0];
      console.log(this.images);
    }

    let fd=new FormData();
    fd.append('banner',this.images.name)
    console.log(fd.get('banner'));
    this.auth.image(fd).subscribe((res)=>{
      console.log(res);
    })
  }
}
