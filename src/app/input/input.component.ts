import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Input } from './input.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  input: Input[] = [];
  knocks!: number;
  time!: number;
  answers!: number;
  sets!: number;
  props!: number;
  knocksPerAns!: number;


  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onAddValue(){
    // let knock = this.knocks;
    // let ans = this.answers;
    // // this.knocksPerAns = knock/ans;

    this.knocks = 132;
    this.time = 3.25;
    this.answers = 90;
    this.sets = 13;
    this.props = 1;

    // this.router.navigate(['dailystats'], {relativeTo: this.route});

  }

}
