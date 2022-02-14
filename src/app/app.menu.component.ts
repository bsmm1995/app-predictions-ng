import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
                <a href="https://unl.edu.ec/oferta_academica/facultad-de-la-energia-las-industrias-y-los-recursos-naturales-no-renovables-6">
                    <img src="https://siaaf.unl.edu.ec/static/img/logo.png" alt="Prime Blocks" class="w-full mt-3"/>
                </a>
            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Introduction',
                items:[
                    {label: 'Start',icon: 'pi pi-fw pi-home', routerLink: ['/']}
                ]
            },
            {
                label: 'UI Components',
                items: [
                    {label: 'Results', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts']}
                ]
            },
            {
                label:'Predicctions',
                items:[
                    {label: 'Predicctions', icon: 'pi pi-fw pi-eye', routerLink: ['/predictions'], badge: 'NEW'}
                ]
            },
            {
                label: 'Hierarchy',
                items: [
                    {
                        label: 'Objetives', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Objetive 1', icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Objetive 2', icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Objetive 3', icon: 'pi pi-fw pi-bookmark'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Resources',
                items: [
                    {label: 'Google Colab Notebook', icon: 'pi pi-fw pi-external-link'},
                    {label: 'GitHub repository', icon: 'pi pi-fw pi-external-link', url: ['https://github.com/bsmm1995/app-predictions-ng'], target: '_blank'}
                ]
            },
            {
                label: 'Downloads',
                items: [
                    {label: 'Complete degree work', icon: 'pi pi-fw pi-arrow-down'},
                    {label: 'Dataset', icon: 'pi pi-fw pi-arrow-down', url: ['https://github.com/bsmm1995/app-predictions-ng'], target: '_blank'}
                ]
            }
        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
