import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { IsHansComponent } from '@angular-monorepo/is-hans';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, IsHansComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gugus-a';
}
