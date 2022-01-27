import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfigService } from '../../service/app.config.service';
import { AppConfig } from '../../api/appconfig';
import { PredictionsService } from 'src/app/service/predictionservice';
import { BaseResponse } from 'src/app/models/BaseResponse';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    subscription: Subscription;
    objetives: any[] = [];
    config: AppConfig;

    constructor(private predictionsService: PredictionsService, public configService: ConfigService) {}

    ngOnInit() {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(config => {
            this.config = config;
        });
        this.getObjetives();
    }

    async getObjetives() {
        const result =
          (await this.predictionsService.getObjetives()) as BaseResponse;
        this.objetives = result.auto;
      }
}
