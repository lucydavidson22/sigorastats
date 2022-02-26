import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Input } from './input.model';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [DatePipe]
})
export class InputComponent implements OnInit {
  input: Input[] = [];
  knocks!: number;
  time!: number;
  answers!: number;
  sets!: number;
  props!: number;
  knocksPerAns!: number;
  currentDate = Date.now();


  constructor(private router: Router,
              private route: ActivatedRoute,
              private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    // let knock = this.knocks;
    // let ans = this.answers;
    // // this.knocksPerAns = knock/ans;

    // this.knocks = 132;
    // this.time = 3.25;
    // this.answers = 90;
    // this.sets = 13;
    // this.props = 1;

    // this.router.navigate(['dailystats']);

    const value = form.value;
    const newInput = new Input(value.knocks, value.answers , value.sets , value.totalTime, value.props);

    this.router.navigate(['view-data']);

  }

}
