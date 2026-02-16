import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  touchedFields: { [key: string]: boolean } = {};

  markFieldTouched(fieldName: string) {
    this.touchedFields[fieldName] = true;
  }

  isFieldTouched(fieldName: string): boolean {
    return this.touchedFields[fieldName] || false;
  }

  isEmailValid(): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(this.formData.email);
  }

  isPhoneValid(): boolean {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(this.formData.phone);
  }

  onSubmit(form: any) {
    // Mark all fields as touched to show validation errors
    this.touchedFields = {
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      message: true
    };

    if (form.valid && this.isEmailValid() && this.isPhoneValid()) {
      const { firstName, lastName, email, phone, message } = this.formData;
      const mailtoLink = `mailto:rsrahulsalunkhe4@gmail.com?subject=Contact from ${firstName} ${lastName} - ${phone}&body=${message}`;
      window.location.href = mailtoLink;
      // Reset form
      form.reset();
      this.formData = { firstName: '', lastName: '', email: '', phone: '', message: '' };
      this.touchedFields = {};
    }
  }
}
