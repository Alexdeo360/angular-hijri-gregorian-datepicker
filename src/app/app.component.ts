import { Component } from '@angular/core';
import { DayInfo } from 'projects/hijri-gregorian-datepicker/src/_interfaces/calendar-model';
import { stylesConfig } from 'projects/hijri-gregorian-datepicker/src/_interfaces/styles-config.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toggle: boolean = false;
  selectedDate: DayInfo;
  stylesConfig: stylesConfig = {
    backgroundColor: '#E3F6F5',
    primaryColor: '#272343',
    secondaryColor: '#272343',
    todaysDateBgColor: '#272343',
    todaysDateTextColor: '#fff',
    confirmBtnTextColor: '#fff',
    disabledDayColor: '#C0C0C0',
    dayColor: '#000',
    dayNameColor: '#0d7f91',
    fontFamily: 'Default-Regular',
  };
  mode = 'greg';
  constructor() {}

  onSubmit(ev: any) {
    console.log('On Submit ', ev);
  }

  onChange(eventData: any) {
    console.log('On Change ', eventData);
    if (!Array.isArray(eventData)) {
      this.selectedDate = eventData;
    }
  }

  onMonthChangeTest(ev: any) {
    console.log('Month Changed: ', ev);
  }

  onYearChangeTest(ev: any) {
    console.log('Year Changed ', ev);
  }

  toggleMode() {
    this.mode = this.mode == 'greg' ? 'ummAlQura' : 'greg';
  }
}
