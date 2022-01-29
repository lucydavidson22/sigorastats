import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedFeatureEvent = new EventEmitter<string>();
  step: any;
  constructor() { }

  ngOnInit(): void {
    this.step == 'input';
    localStorage.setItem('step', JSON.stringify(this.step));
  }

  onSelect(feature: string){
      this.selectedFeatureEvent.emit(feature);
      this.step = feature;
      localStorage.setItem('step', JSON.stringify(this.step));
  }

}
