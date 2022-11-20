import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  public sidebarShow: boolean = false;
  public searchShow: boolean = false;
  ngOnInit(): void {
    this.cities = this.countries.filter(x => x.id == 1)[0].cities;
  }
  selectedCountry: any;

  cities = {};

  countries = [{
    id: 1, name: 'France', cities: ['Paris', 'Marseille', 'Nice']
  },
  {
    id: 2, name: 'Germany', cities: ['Hamburg', 'Berlin', 'Munich']
  },
  {
    id: 3, name: 'Italy', cities: ['Roma', 'Milan', 'Napoli']
  },
  ];
  onChange(deviceValue: number) {
    this.cities = this.countries.filter(x => x.id == deviceValue)[0].cities;
  }
  

}
