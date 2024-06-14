import { Component } from '@angular/core';
import {LoginComponent} from "../../../../../ui/src/lib/components/login/login.component";
import { Router } from '@angular/router';

@Component({
  selector: 'login-container',
  standalone: true,
  imports: [
    LoginComponent,
  ],
  templateUrl: './login.container.component.html',
  styleUrl: './login.container.component.scss'
})
export class LoginContainerComponent {
  constructor(
    private router: Router,
  ) {
  }

  events($event: any) {
    console.log('container', $event.event)
    if ($event.event = 'signIn') {
      this.router.navigate(['/dashboard']);
    }
  }
}
