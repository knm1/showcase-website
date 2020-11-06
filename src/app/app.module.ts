import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './partials/footer/footer.component';
import {NavbarComponent} from './partials/navbar/navbar.component';
import {ContactComponent} from './partials/contact/contact.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectComponent} from './projects/project/project.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';


const APP_ROUTE: Routes = [
  {path: 'company', component: HomeComponent},
  {path: 'project/karstate', component: ProjectComponent},
  {path: 'project/knm-platform', component: ProjectComponent},
  {
    path: '',
    redirectTo: '/company',
    pathMatch: 'full'
  }
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ContactComponent,
    ProjectsComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTE, routerOptions),
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
