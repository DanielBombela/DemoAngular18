import { Component, input } from '@angular/core';
import { MATERIAL_MODULES } from '../../shared/material/material.imports';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  title = input.required<string>();
  description = input<string>();
}
