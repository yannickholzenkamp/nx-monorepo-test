import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-monorepo-is-hans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './is-hans.component.html',
})
export class IsHansComponent {

  @Input()
  text: string | undefined;

  checkHans(): boolean {
    return this.text?.toLowerCase() === 'hans';
  }

}
