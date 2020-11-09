import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public form: FormGroup;

  private postEndpoint = 'https://formspree.io/f/xwkwbgld';
  public showSuccessMsg: boolean;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      contactName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });

  }

  submit(): void {

    if (this.form.valid) {
      this.http.post(this.postEndpoint, this.form.getRawValue()).subscribe({
        error: error => {
          console.error('There was an error!', error.message);
        },
        next: data => {
          this.form.reset();
          this.showSuccessMsg = true;
        }
      });
    } else {

    }


  }
}
