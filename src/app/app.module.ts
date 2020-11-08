import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './partials/footer/footer.component';
import {NavbarComponent} from './partials/navbar/navbar.component';
import {ContactComponent} from './partials/contact/contact.component';
import {ProjectsComponent} from './projects/projects.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {NgcCookieConsentConfig, NgcCookieConsentModule} from 'ngx-cookieconsent';
import { KarstrateComponent } from './projects/karstrate/karstrate.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'tinesoft.github.io'
  },
  position: 'bottom',
  theme: 'edgeless',
  palette: {
    popup: {
      background: '#161c2d',
      text: '#ffffff',
      link: '#ffffff'
    },
    button: {
      background: '#3259d0',
      text: '#000000',
      border: 'transparent'
    }
  },
  type: 'info',
  content: {
    message: 'This website uses cookies to ensure you get the best experience on our website.',
    dismiss: 'Got it!',
    deny: 'Decline',
    link: 'Learn more',
    href: 'https://knm.lu/privacy',
    policy: 'Cookie Policy',
    header: 'Cookies used on the website!',
    allow: 'Allow cookies'
  }
};


const APP_ROUTE: Routes = [
  {path: 'company', component: HomeComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'project/karstate', component: KarstrateComponent},
  {path: 'project/platform', component: ProjectsComponent},
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
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
    KarstrateComponent,
    PrivacyComponent,
    PageNotFoundComponent
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
