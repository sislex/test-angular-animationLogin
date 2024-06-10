import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'login',
  standalone: true,
  imports: [

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Output() emitter = new EventEmitter();

  singIn() {
    console.log('component')
    this.emitter.emit({
      event: 'singIn'
    });
  }
}
