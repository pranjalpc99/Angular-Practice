import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  title = "WelcometoSCPTL";
  todaydate = new Date();

  jsonval = 
          {
            name : "Pranjal",
            age : "19",
            address :
                    {
                      a1 : "Mumbai",
                      a2 : "Andheri"
                    }
            
          };

  months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  empData = [
    {
      id : 1 , name : 'Pranjal' , age : 19 ,
    },
    {
      id : 2 , name : 'Gaurav' , age : 19 ,
    },
    {
      id : 3 , name : 'Abhishek' , age : 19 ,
    },
    {
      id : 4 , name : 'Ajay' , age : 19 ,
    }
  ];

  drop = 1;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onLoad(){
    this.router.navigate(['hero','hi']);
  }

}
