import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent {
  indianCurrentTime!: string;
  indianCurrentDate!:any;

  ngOnInit(): void {
    this.getIndianCurrentTime();
  }

  getIndianCurrentTime(): void {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'Asia/Kolkata', // 'Asia/Kolkata' is the time zone identifier for Indian Standard Time (IST)
      hour12: true, // Use 12-hour format
    };

    const indianTime = new Date().toLocaleTimeString('en-IN', options);
    const indianDate=new Date();
    this.indianCurrentDate=indianDate.toDateString();
    this.indianCurrentTime = indianTime;
    console.log('Indian Current Time:', this.indianCurrentTime);
    console.log('Date:', this.indianCurrentDate);
    
    localStorage.setItem('Time',this.indianCurrentTime+this.indianCurrentDate);
  }

}
