import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrl: './my-home.component.css'
})

export class MyHomeComponent implements OnInit{
    public arr=[
      {
        name: 'Keti',
        age: 26,
        status: true
      },
      {
        name: 'Natia',
        age: 25,
        status: true
      },
      {
        name: 'Joni',
        age: 21,
        status: false
      }
    ];

  public arr2: any =[];

  constructor(){

  }
  ngOnInit(): void{
   this.arr2= this.arr.filter(item => item.age > 22);
   console.log(this.arr2);
   
  }
}

