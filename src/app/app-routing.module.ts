import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartsComponent } from './components/charts/charts.component';
import { AppMainComponent } from './app.main.component';
import { BlocksComponent } from './components/blocks/blocks.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component: DashboardComponent},
                    {path: 'uikit/charts', component: ChartsComponent},
                    {path: 'blocks', component: BlocksComponent}
                ],
            },
            {path: '**', redirectTo: 'pages/notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
