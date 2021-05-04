import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  customerform= new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    number: new FormControl(''),
    password: new FormControl(''),
    subscribe: new FormControl(''),
    gender: new FormControl('')
  });
  
  

  constructor() { }

 
   ngOnInit(): void {
    
  }
  onSubmit(value: any){
    console.log(value);
  }
}
