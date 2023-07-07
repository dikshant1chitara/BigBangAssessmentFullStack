import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  formData: any = {};
  showThankYou: boolean = false;

  submitForm() {
    // Process the form data here (e.g., send it to the server)

    // Show the Thank You message
    this.showThankYou = true;
  }
}
