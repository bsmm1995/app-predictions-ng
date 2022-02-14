import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppConfig } from 'src/app/api/appconfig';
import { ConfigService } from 'src/app/service/app.config.service';

@Component({
    templateUrl: './charts.component.html',
})
export class ChartsComponent implements OnInit, OnDestroy {
    pieDataNT: any;
    pieOptionsNT: any;

    pieDataNV: any;
    pieOptionsNV: any;

    pieDataRT: any;
    pieOptionsRT: any;

    pieDataRV: any;
    pieOptionsRV: any;

    config: AppConfig;

    subscription: Subscription;

    constructor(public configService: ConfigService) {}

    ngOnInit() {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(
            (config) => {
                this.config = config;
                this.updateChartOptions();
            }
        );

        this.pieDataNV = {
            labels: ['A', 'B'],
            datasets: [
                {
                    data: [93.8, 6.2],
                    backgroundColor: ['#FF6384', '#36A2EB'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB'],
                },
            ],
        };

        this.pieDataNT = {
            labels: ['A', 'B'],
            datasets: [
                {
                    data: [95.1, 4.9],
                    backgroundColor: ['#FF6384', '#36A2EB'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB'],
                },
            ],
        };

        ///RFC

        this.pieDataRV = {
            labels: ['A', 'B'],
            datasets: [
                {
                    data: [90.7, 9.3],
                    backgroundColor: ['#FF6384', '#36A2EB'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB'],
                },
            ],
        };

        this.pieDataRT = {
            labels: ['A', 'B'],
            datasets: [
                {
                    data: [84.1, 15.9],
                    backgroundColor: ['#FF6384', '#36A2EB'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB'],
                },
            ],
        };

        this.updateChartOptions();
    }

    updateChartOptions() {
        if (this.config.dark) this.applyDarkTheme();
        else this.applyLightTheme();
    }

    applyLightTheme() {
        this.pieOptionsNV = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057',
                    },
                },
            },
        };

        this.pieOptionsNT = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057',
                    },
                },
            },
        };

        //RFC
        this.pieOptionsRV = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057',
                    },
                },
            },
        };

        this.pieOptionsRT = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057',
                    },
                },
            },
        };
    }

    applyDarkTheme() {
        this.pieOptionsNV = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef',
                    },
                },
            },
        };

        this.pieOptionsNT = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef',
                    },
                },
            },
        };

        //RFC

        this.pieOptionsRV = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef',
                    },
                },
            },
        };

        this.pieOptionsRT = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef',
                    },
                },
            },
        };


    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
