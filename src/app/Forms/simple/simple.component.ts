import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  constructor() { }
name = new FormControl('');
phone = new FormControl('');
simpleArray: {} [] = [];

ngOnInit() {
  }

updateName() {
    this.name.setValue('Nancy');
  }
  addtoSimpleArray() {
    this.simpleArray.push({name: this.name.value, phone: this.phone.value});
    this.name.setValue('');
    this.phone.setValue('');
  }
}
