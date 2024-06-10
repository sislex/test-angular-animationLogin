import { Component } from '@angular/core';
import {DashboardComponent} from "../../../../../ui/src/lib/components/dashboard/dashboard.component";

@Component({
  selector: 'lib-dashboard.container',
  standalone: true,
  imports: [
    DashboardComponent,
  ],
  templateUrl: './dashboard.container.component.html',
  styleUrl: './dashboard.container.component.scss'
})
export class DashboardContainerComponent {

}
