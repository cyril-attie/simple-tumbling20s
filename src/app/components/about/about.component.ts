import { Component } from '@angular/core';
import { faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
 
  faTwitter = faTwitter;
  faLinkedinIn = faLinkedinIn;
  constructor() { }


}
