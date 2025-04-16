import { ReactiveFormsModule} from '@angular/forms';
import {UpperCasePipe} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  styleUrl: './contact.component.scss',
  imports: [ReactiveFormsModule, UpperCasePipe, TranslatePipe],
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
}
