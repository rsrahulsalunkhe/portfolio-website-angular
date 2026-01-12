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

  onSubmit(form: any) {
    if (form.valid) {
      const { firstName, lastName, email, phone, message } = this.formData;
      const mailtoLink = `mailto:rsrahulsalunkhe4@gmail.com?subject=Contact from ${firstName} ${lastName}&body=Name: ${firstName} ${lastName}%0DEmail: ${email}%0DPhone: ${phone}%0D%0DMessage:%0D${message}`;
      window.location.href = mailtoLink;
      // Reset form
      form.reset();
      this.formData = { firstName: '', lastName: '', email: '', phone: '', message: '' };
    }
  }
}
