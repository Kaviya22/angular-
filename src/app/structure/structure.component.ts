import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  public item=["1","2","3","4"];
 

  constructor() { }

  ngOnInit(): void {
  }

}
