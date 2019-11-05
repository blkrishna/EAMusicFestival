import { EAMusicFestivalService } from './service/EAMusicFestival.service';
import { Component, OnInit } from '@angular/core';
import { MusicFestival } from './model/MusicFestival.model';
import { Output } from './model/output.model';
import { OutputBand } from './model/outputBand.model';

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
    this.eaMusicFestivalService.getData().subscribe((data: MusicFestival[]) => {
      console.log('data1', data);
      if (data !== null && data !== undefined) {
        this.dataRetrieved = true;
        this.eadata = data;
      } else {
        this.dataRetrieved = false;
      }
    });
  }
}
