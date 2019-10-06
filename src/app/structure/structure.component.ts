import { Component, OnInit } from '@angular/core';
import { COLORS } from '../mock-colors';
import { Color } from '../color';
import {EmpService} from '../emp.service';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  colors = COLORS;
  col_temp: Color;
  newSer;

  constructor(private empservice : EmpService) { }

  ngOnInit() {
    this.getService();
  }

  getService(): void {
    this.newSer = this.empservice.getEmp();
  }

  onSelect(col:Color) : void{
    this.col_temp = col;
  }

}
