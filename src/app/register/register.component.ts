import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  getName = '';
  getAddress = '';
  getGender = '';
  getDob = '';
  getCity = '';
  getDistrict = '';

  onSubmit(data:NgForm){
    console.log(data.value);
    this.getName = data.value.name;
    
  }




  constructor() { }

  ngOnInit() {
  }

}
