import { Injectable } from '@angular/core';
import {Empdatatype} from './emp_datatype';
import {Empdata} from './emp_data';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }

  getEmp(): Empdatatype[]{
    return Empdata;
  }
}
