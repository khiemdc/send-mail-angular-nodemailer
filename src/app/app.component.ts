import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  angForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  sendMail(name, email, message) {
    this.contactService.sendEmail(name, email, message).subscribe(success => {
      console.log('You are data we succesfully submitted');
      console.log(success);
    }, error => {
      console.log('Something went wrong');
    });
  }
  ngOnInit() {
  }

}