import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  knocks!: number;
  time!: number;
  answers!: number;
  sets!: number;
  props!: number;
  knocksPerAns!: number;


  constructor() { }

  ngOnInit(): void {
  }

  onAddValue(){
    // let knock = this.knocks;
    // let ans = this.answers;
    // this.knocksPerAns = knock/ans;

    this.knocks = 132;
    this.time = 3.25;
    this.answers = 90;
    this.sets = 13;
    this.props = 1;

  }

}
