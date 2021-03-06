import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  activeRed: boolean = false;
  activeYellow: boolean = false;
  activeGreen: boolean = false;
  timeOut1;
  timeOut2;
  timeOut3;
  timeOut4;
  selectOptions: Array<string> = [
    'Red',
    'Yellow',
    'Green',
    'Not Started'
  ];

  constructor() {
  }

  ngOnInit() {
    this.startTraffic();

  }

  startTraffic() {
    this.timeOut1 = setTimeout(() => {
      this.activeRed = true;
      this.activeYellow = false;
      this.activeGreen = false;
    }, 1000);

    this.timeOut2 = setTimeout(() => {
      this.activeRed = true;
      this.activeYellow = true;
    }, 3000);

    this.timeOut3 = setTimeout(() => {
      this.activeGreen = true;
      this.activeRed = false;
      this.activeYellow = false;
    }, 6000);

    this.timeOut4 = setTimeout(() => {
      this.activeGreen = false;
      this.activeYellow = true;
      this.ngOnInit();
    }, 9000);
  }


  stopTrafficLight() {
    clearTimeout(this.timeOut1);
    clearTimeout(this.timeOut2);
    clearTimeout(this.timeOut3);
    clearTimeout(this.timeOut4);

  }

  onChange(event) {
    console.log(event);
    this.stopTrafficLight();

    switch (event.target.outerText) {
      case 'Red':
        this.activeRed = true;
        this.activeYellow = false;
        this.activeGreen = false;
        break;
      case 'Yellow':
        this.activeRed = false;
        this.activeYellow = true;
        this.activeGreen = false;
        break;
      case 'Green':
        this.activeRed = false;
        this.activeYellow = false;
        this.activeGreen = true;
        break;
      case 'Not Started':
        this.activeRed = false;
        this.activeYellow = false;
        this.activeGreen = false;
        break;
    }

  }


}
