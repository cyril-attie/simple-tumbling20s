import { Component } from '@angular/core';
import { faTwitter, faFacebookF, faLinkedinIn, faWhatsapp, faTelegramPlane,faGetPocket } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-right-side-column',
  templateUrl: './right-side-column.component.html',
  styleUrls: ['./right-side-column.component.css']
})
export class RightSideColumnComponent  {

  faTwitter = faTwitter;
  faLinkedinIn = faLinkedinIn;
  faWhatsapp = faWhatsapp;
  faTelegramPlane = faTelegramPlane;
  faGetPocket = faGetPocket;
  faFacebookF = faFacebookF;
  constructor() { }


}
