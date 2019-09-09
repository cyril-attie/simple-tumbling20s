import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios


// Componentes
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { HomeComponent } from './components/home/home.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { Tumbling20sComponent } from './components/tumbling20s/tumbling20s.component';
import { BlockchainComponent } from './components/blockchain/blockchain.component';
import { AboutComponent } from './components/about/about.component';
import { ShareLinksComponent } from './components/shared/share-links/share-links.component';
import { RightSideColumnComponent } from './components/shared/right-side-column/right-side-column.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    IntroductionComponent,
    Tumbling20sComponent,
    BlockchainComponent,
    AboutComponent,
    ShareLinksComponent,
    RightSideColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
