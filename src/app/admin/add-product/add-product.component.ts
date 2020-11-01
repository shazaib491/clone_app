import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  percentDone: any = 0;
  preview: string;
    // @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;files  = [];
  constructor(private fb: FormBuilder, private proSend: ProductService) {
  }
  product: FormGroup;
  ngOnInit(): void {
    this.product = this.fb.group({
      banner: [null],
      productName: [],
      mrp: [],
      price: [],
      color: [],
      brand: [],
      itemDimension: [],
      itemWeight: [],
      voltage: [],
      capacity: [],
      features: this.fb.array([
        this.fb.group({
          itemid: [1],
          item: ['ultra hd'],
        })
      ]),
      label: this.fb.array([
        this.fb.group({
          labelId: [1],
          labelnm: [''],
          labelValue: []
        })
      ])
    })
  }
  // uploadFile(event) {
  //   const file = (event.target as HTMLInputElement).files[0];
  //   this.product.patchValue({
  //     banner: file
  //   });
    // this.product.get('banner').updateValueAndValidity()

 // preview the image
   // const reader = new FileReader();
   // reader.onload=()=> {
   //   this.preview = reader.result as string;
   // }

     // reader.readAsDataURL(file)
  // }

    get features() {
      return this.product.get('features') as FormArray;
    }
    get labels(){
      return this.product.get('label') as FormArray;

    }
    addFeatures() {
      let len = this.features.length;
      let newFeatures = this.fb.group({
        itemid: [len + 1],
        item: [''],
      })
      this.features.push(newFeatures)
    }

    removeFeatures(index: number) {
      this.features.removeAt(index);
    }
    addLabels(){
      let len = this.labels.length;
      const newlabel = this.fb.group({
        labelId: [len + 1],
        labelnm: [''],
        labelValue: []
      })
      this.labels.push(newlabel);
    }
    removeLabels(index: number){
      this.labels.removeAt(index);

    }
    // *************************************************

    uploadFile(event) {

      if(event.target.files.length>0){
          const file=event.target.files[0];
          this.product.get('banner').setValue(file);
        }
      }

    AddData() {
      console.log(this.product.controls)
      console.log(this.product.value.banner);
      this.proSend.addItem(this.product.value.banner).subscribe((res)=>{
        console.log(res);
      })
  }
  // *************************************************


  }
