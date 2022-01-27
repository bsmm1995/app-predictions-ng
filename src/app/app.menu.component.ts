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
                label: 'Home',
                items:[
                    {label: 'Dashboard',icon: 'pi pi-fw pi-home', routerLink: ['/']}
                ]
            },
            {
                label: 'UI Components',
                items: [
                    {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts']}
                ]
            },
            {
                label:'Prime Blocks',
                items:[
                    {label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW'}
                ]
            },
            {
                label: 'Pages',
                items: [
                    {label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['pages/login']}
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
