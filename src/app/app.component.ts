import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-component',
  standalone: true,
  template: ``,
})
export class MyComponent {
  @Input() input = '';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyComponent],
  template: `
    <my-component [input]="name"></my-component>
  `,
})
export class AppComponent {
  name: string | null = 'Angular';
}
