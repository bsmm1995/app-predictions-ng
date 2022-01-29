import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PredictionsService {
    constructor(private http: HttpClient) {}

    makePredictions(data) {
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers':
                'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            Allow: 'GET, POST, OPTIONS, PUT, DELETE',
        };
        return this.http
            .post(
                '/predict',
                data,
                {
                    headers,
                }
            )
            .toPromise();
    }

    getObjetives() {
        return this.http
            .get('https://run.mocky.io/v3/80eed0fa-ac01-4a62-8917-8bc238a8b4ce')
            .toPromise();
    }
}
