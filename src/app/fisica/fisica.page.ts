import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fisica',
  templateUrl: './fisica.page.html',
  styleUrls: ['./fisica.page.scss'],
})
export class FisicaPage implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
