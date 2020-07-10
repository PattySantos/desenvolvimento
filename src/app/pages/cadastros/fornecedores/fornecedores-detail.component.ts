import { Component, OnInit } from '@angular/core';
import {  FornecedoresModel } from './fornecedores.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-fornecedores-detail',
  templateUrl: './fornecedores-detail.component.html',
  styleUrls: ['./fornecedores.component.scss']
})
export class FornecedoresDetailComponent implements OnInit {

  fornecedor: FornecedoresModel;
 fornecedorForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
  }
  
  public back() {
    this._router.navigate(['/pages/cadastros/fornecedores/']);
}
  onValueChanged(data?: any) {
    if (!this.fornecedorForm) { return; }
    const form = this.fornecedorForm;

    for (const field in this.formErrors) {
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
            const messages = this.validationMessages[field];
            for (const key in control.errors) {
                this.formErrors[field] += messages[key] + '';
            }
        }
    }
}
  
  buildForm(): void {
    this.fornecedorForm = this.fb.group({
        'id': [''],
        'nome': [''],
        'cpf': [''],
        'dataCadastro': [''],

       

    });
    this.fornecedorForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
}

formErrors = {
  'nome': '',
  'cpf': '',

};

validationMessages = {
  'nome': {
      'required': 'Codigo é obrigatório!',
      'minlength': 'Descrição no máximo 4 caracteres !',
      'maxlength': 'Descrição no máximo 24 caracteres !'
  },
  
  'cpf': {
      'required': 'CNPJ/CPF é obrigatório!'
  },
  
  
}

}
