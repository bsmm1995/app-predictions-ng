import { Component } from '@angular/core';
import { BaseResponse } from 'src/app/models/BaseResponse';
import { Prediction } from 'src/app/models/Prediction';
import { PredictionsService } from 'src/app/service/predictionservice';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './predictions.component.html',
})
export class PredictionsComponent {
    modalForDataEntry: boolean;
    ChestPainType: any[];
    RestingECG: any[];
    ExerciseAngina: any[];
    ST_Slope: any[];
    Sex: any[];
    Models: any[];
    predictResult: String = '?';
    prediction: Prediction = new Object();
    objetives: any[] = [];

    constructor(
        private predictionsService: PredictionsService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.ChestPainType = [
            { label: 'Asintomático', value: 1 },
            { label: 'Anguina atípica', value: 2 },
            { label: 'Dolor no anguinal ', value: 3 },
            { label: 'Anguina típica ', value: 4 },
        ];
        this.Sex = [
            { label: 'Male', value: 1 },
            { label: 'Female', value: 2 },
        ];

        this.RestingECG = [
            { label: 'Hipertrofia ventricular izquierda', value: 1 },
            { label: 'Normal', value: 2 },
            { label: 'Anomalía de la onda', value: 3 },
        ];

        this.ExerciseAngina = [
            { label: 'Yes', value: 1 },
            { label: 'No', value: 2 },
        ];

        this.ST_Slope = [
            { label: 'Ascendente', value: 1 },
            { label: 'Plano', value: 2 },
            { label: 'Descendente', value: 3 },
        ];

        this.Models = [
            { label: 'Random Forest', value: 'RFC' },
            { label: 'Artificial Neural Networks', value: 'ANN' },
        ];
        this.prediction.age = 45;
        this.prediction.restingBP = 45;
        this.prediction.cholesterol = 170;
        this.prediction.fastingBS = 45;
        this.prediction.maxHR = 120;
        this.prediction.oldpeak = 45;
    }

    makePrediction() {
        if (!this.isValidParams(this.prediction)) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'All fields must contain a value',
            });
            return;
        }
        this.modalForDataEntry = false;
        const data = {
            model: this.prediction.model,
            data: [
                [38, 1, 3, 0, 2, 1.5, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
            ],
        };

        this.predictionsService
            .makePredictions(data)
            .then((result: BaseResponse) => {
                console.log(result);
                if (result.error) {
                    //TODO
                } else {
                    this.predictResult = result.auto[0] == 1 ? 'SI' : 'NO';
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Success prediction',
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    isValidParams(prediction: Prediction) {
        if (
            prediction.age == null ||
            prediction.restingBP == null ||
            prediction.cholesterol == null ||
            prediction.fastingBS == null ||
            prediction.maxHR == null ||
            prediction.oldpeak == null
        ) {
            return false;
        }
        return true;
    }
}
