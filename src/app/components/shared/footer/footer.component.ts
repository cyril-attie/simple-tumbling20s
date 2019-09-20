import { Component } from '@angular/core';
import { faTwitter, faFacebookF, faLinkedinIn, faTelegramPlane, faReddit} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  anio: number;
  faTwitter = faTwitter;
  faLinkedinIn = faLinkedinIn;
  faEnvelopeOpen = faEnvelopeOpen;
  faTelegramPlane = faTelegramPlane;
  faFacebookF = faFacebookF;
  faReddit = faReddit;
  constructor() {
    this.anio = new Date().getFullYear() + 1;
  }

}
