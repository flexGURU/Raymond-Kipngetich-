import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailjsService } from '../../services/emailjs.service';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactDetails: FormGroup

  constructor(private fb: FormBuilder, private emailJS: EmailjsService){

    this.contactDetails = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', Validators.required],
        subject: ['', Validators.required],
        message: ['', Validators.required],
      }
    )
  }

  get formControls(){
    return this.contactDetails.controls
  }

  submit(){
    this.emailJS.sendEmail(this.contactDetails)

  }

  
  goToUrl(url){
    window.open(url, "_blank")

  }


}
