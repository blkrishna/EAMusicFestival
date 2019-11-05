import { EAMusicFestivalService } from './service/EAMusicFestival.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit  {

  title = 'EAMusicFestivalUI';
  public eadata: any;
  public dataRetrieved = false;

  constructor(private eaMusicFestivalService: EAMusicFestivalService) {
  }

  ngOnInit(): void {
    this.eaMusicFestivalService.getData().subscribe(data => {
      console.log('data', data);
      if (data !== null && data !== '' && data !== undefined) {
        this.dataRetrieved = true;
        this.eadata = data;
      } else {
        this.dataRetrieved = false;
      }
    });
  }
}
