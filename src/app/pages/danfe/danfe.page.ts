import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-danfe',
  templateUrl: './danfe.page.html',
  styleUrls: ['./danfe.page.scss'],
})
export class DanfePage implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      danfe: ['', [Validators.required]],
      cnpj: [''],
      razao: [''],
      modelo: [''],
      serie: [''],
      numero: [''],
      emissao: [''],
      data: [''],
      entradaSaida: [''],
      valorTotal: [''],
      numeroNota: [''],
      items: [''],
      itemsEmb: ['']
    });
  }
}

