import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { Tumbling20sComponent } from './components/tumbling20s/tumbling20s.component';
import { BlockchainComponent } from './components/blockchain/blockchain.component';
import { AboutComponent } from './components/about/about.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { TaleComponent } from './components/tale/tale.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'tale', component: TaleComponent },
  { path: 'tumbling20s', component: Tumbling20sComponent },
  { path: 'blockchain', component: BlockchainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
