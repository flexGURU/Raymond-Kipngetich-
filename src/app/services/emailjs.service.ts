import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { EnvironmentConfig } from '../../environments/environment.interface';

@Injectable({
  providedIn: 'root'
})
export class EmailjsService {
  constructor(private toastr: ToastrService) { }
  
  async sendEmail(contactDetails: FormGroup) {
    try {
      emailjs.init(environment.emailjsconfig.publicKey);
      let response = await emailjs.send(
        environment.emailjsconfig.serviceId,
        environment.emailjsconfig.templateId,
        {
          from_name: contactDetails.value.name,
          to_name: contactDetails.value.to_name,
          from_email: contactDetails.value.email,
          subject: contactDetails.value.subject,
          message: contactDetails.value.message,
          to_email: "raymond.kipngetich1@gmail.com",
        }
      );
      
      contactDetails.reset();
      console.log(response);
      this.toastr.success('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      this.toastr.error('Failed to send email');
    }
  }
}