import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  records: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // FormArray
    //    FormGroup
    //      Formcontrol
    // we use this items array so we can use multiple form group in our reactive forms

    this.records = this.fb.group({
      product: [''],
      price: [''],
      items: this.fb.array([
        this.fb.group({
          itemId: ['1'],
          itemName: ['vegitable'],
          itemDes: ['sweet dish']
        })
      ]),
      // [{itemId:1,itemName:'vegitables',itemDes:'descripton'}]
      chocolates: this.fb.array([
        new FormControl('cadebury'),
        new FormControl('dairy milk'),
      ])
      // ['cadebury','dairy milk']
    })
  }

  get items() {
    return this.records.get('items') as FormArray;
  }

  addnewrow() {
    const itemlength = this.items.length;
    console.log(itemlength);
    const newElement = this.fb.group({
      itemId: [itemlength + 1],
      itemName: [''],
      itemDes: ['']
    })
    this.items.push(newElement);
  }


  submit() {
    console.log(this.records.value);
    console.log(this.records.controls);
  }

  deleteRow(index) {
    this.items.removeAt(index);
  }
}
