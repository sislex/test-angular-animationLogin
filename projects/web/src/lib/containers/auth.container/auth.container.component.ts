import { Component } from '@angular/core';
import { AuthComponent } from '../../../../../ui/src/lib/components/auth/auth.component';
import {LoginContainerComponent} from "../login.container/login.container.component";

@Component({
  selector: 'lib-auth.container',
  standalone: true,
  imports: [
    AuthComponent,
    LoginContainerComponent,
  ],
  templateUrl: './auth.container.component.html',
  styleUrl: './auth.container.component.scss'
})
export class AuthContainerComponent {

}
