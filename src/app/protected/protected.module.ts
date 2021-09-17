import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { ProtectedRoutingModule } from './protected-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { SalesGraphComponent } from '../dashboard/dashboard-components/sales-graph/sales-graph.component';
import { VisitGraphComponent } from '../dashboard/dashboard-components/visit-graph/visit-graph.component';
import { WebsiteGraphComponent } from '../dashboard/dashboard-components/website-graph/website-graph.component';
import { CardsComponent } from '../dashboard/dashboard-components/cards/cards.component';
import { ContactsComponent } from '../dashboard/dashboard-components/contacts/contacts.component';
import { ProjectOfMonthComponent } from '../dashboard/dashboard-components/project-of-month/project-of-month.component';
import { DashboardModule } from '../dashboard/dashboard.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};   

@NgModule({
  declarations: [
    MainPageComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    PerfectScrollbarModule,
    SharedModule,
    DashboardModule
    // SalesGraphComponent,
    // VisitGraphComponent,
    // WebsiteGraphComponent,
    // CardsComponent,
    // ContactsComponent,
    // ProjectOfMonthComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
	{
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class ProtectedModule { }
