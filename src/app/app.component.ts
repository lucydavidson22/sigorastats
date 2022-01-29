import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sigora-statistics-app';
  selectedFeature: string = 'input';

  switchView(selectedFeature: string){
    this.selectedFeature = selectedFeature;
  }

}
