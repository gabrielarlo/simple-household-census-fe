import { Component, OnInit } from '@angular/core';
import { StatsService } from '../services/model/stats.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  senior = 0;
  pwd = 0;
  solo = 0;

  constructor(private _statsService: StatsService) {}

  ngOnInit(): void {
    this.getCounts();
  }

  async getCounts() {
    const res = await this._statsService.getCounts();
    if (res != null) {
      this.senior = res.data['seniors'];
      this.pwd = res.data['pwds'];
      this.solo = res.data['solo_parents'];
    }
  }
}
