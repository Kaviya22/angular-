import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  public department=["CSE","IT","MECH","EEE"];

  onSubmit(value: any){
    console.log(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
