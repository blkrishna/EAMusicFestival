import { EAMusicFestivalService } from './service/EAMusicFestival.service';
import { Component, OnInit } from '@angular/core';
import { Band } from './model/Band.model';
import { RecordLabel } from './model/RecordLabel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit  {

  title = 'EAMusicFestivalUI';
  public eadata: any;
  public dataRetrieved = false;

  musicFestivals: any = [];
  public bands: Band[] = [];
  recordLabels: any = [];

  constructor(private eaMusicFestivalService: EAMusicFestivalService) {
  }

  ngOnInit(): void {
    this.eaMusicFestivalService.getData().subscribe((data: any) => {
      console.log('data:', data);
      if (data !== null && data !== undefined) {
        this.dataRetrieved = true;
        this.eadata = data;
        this.musicFestivals = data;
        this.arrangeData();
      } else {
        this.dataRetrieved = false;
      }
    });
  }

  private arrangeData() {
    const recordLabelList = this.recordLabels;
    this.eadata.forEach((festival: any) => {
      const festivalName = festival.name;
      const bands = festival.bands;
      bands.forEach((band: any) => {
        const existingRecordLabel: RecordLabel = recordLabelList.find(r => r.name === band.recordLabel);
        if (!existingRecordLabel) {
          const newRecordLabel = new RecordLabel();
          newRecordLabel.name = band.recordLabel;
          newRecordLabel.bands = [];

          const newBand = new Band();
          newBand.name = band.name;
          newBand.festivals = [];
          newBand.festivals.push(festivalName);

          newRecordLabel.bands.push(newBand);
          recordLabelList.push(newRecordLabel);
        } else {
          const existingBand = existingRecordLabel.bands.find(b => b.name === band.name);
          if (!existingBand) {
            const newBand = new Band();
            newBand.name = band.name;
            newBand.festivals = [];
            if (festivalName !== undefined) {
              newBand.festivals.push(festivalName);
            }
            existingRecordLabel.bands.push(newBand);
          } else {
            existingBand.festivals.push(festivalName);
          }
        }
      });
    });
  }
}
