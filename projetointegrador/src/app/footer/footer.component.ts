import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faVoicemail } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faInstagram = faInstagram
  faLinkedin = faLinkedin
  faGithub = faGithub
  faFacebook = faFacebook
  faEmail = faVoicemail

  constructor() { }

  ngOnInit(): void {
  }

}
