import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-danfe',
  templateUrl: './danfe.page.html',
  styleUrls: ['./danfe.page.scss'],
})
export class DanfePage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      numero: ['', [Validators.required]]
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  form: FormGroup;
}
