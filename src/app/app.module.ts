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
import {NgcCookieConsentConfig, NgcCookieConsentModule} from 'ngx-cookieconsent';

const cookieConfig: NgcCookieConsentConfig = {
  'cookie': {
    'domain': 'tinesoft.github.io'
  },
  'position': 'bottom',
  'theme': 'edgeless',
  'palette': {
    'popup': {
      'background': '#161c2d',
      'text': '#ffffff',
      'link': '#ffffff'
    },
    'button': {
      'background': '#3259d0',
      'text': '#000000',
      'border': 'transparent'
    }
  },
  'type': 'info',
  'content': {
    'message': 'This website uses cookies to ensure you get the best experience on our website.',
    'dismiss': 'Got it!',
    'deny': 'Decline',
    'link': 'Learn more',
    'href': 'https://knm.lu',
    'policy': 'Cookie Policy',
    'header': 'Cookies used on the website!',
    'allow': 'Allow cookies'
  }
};


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
    NgcCookieConsentModule.forRoot(cookieConfig),
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
