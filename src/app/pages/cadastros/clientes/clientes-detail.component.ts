import { Component, OnInit } from '@angular/core';
import { ClientesModel } from './clientes.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-clientes-detail',
  templateUrl: './clientes-detail.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesDetailComponent implements OnInit {

  cliente: ClientesModel;
  clientesForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
  }
  
  public back() {
    this._router.navigate(['/pages/cadastros/clientes/']);
}
  onValueChanged(data?: any) {
    if (!this.clientesForm) { return; }
    const form = this.clientesForm;

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
    this.clientesForm = this.fb.group({
        'id': [''],
        'nome': [''],
        'cpf': [''],
        'dataCadastro': [''],

       

    });
    this.clientesForm.valueChanges.subscribe(data => this.onValueChanged(data));
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
