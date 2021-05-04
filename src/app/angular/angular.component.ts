import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  public name="";
  public age="";
  public gender="";
  public email="";
  onclick(value1:any,value2: any,value3: any,value4: any)
  {
    
    console.log(value1,value2,value3,value4);
  }
 
  

  constructor() { }
  

  ngOnInit(): void {
  }

}
