import { Component, OnInit } from '@angular/core';
import { EmpresasModel } from './empresas.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-empresas-detail',
  templateUrl: './empresas-detail.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasDetailComponent implements OnInit {

  empresa: EmpresasModel;
  empresasForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
  }
  
  public back() {
    this._router.navigate(['/pages/cadastros/empresas/']);
}
  onValueChanged(data?: any) {
    if (!this.empresasForm) { return; }
    const form = this.empresasForm;

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
    this.empresasForm = this.fb.group({
        'id': [''],
        'nome': [''],
        'cpf': [''],
        'dataCadastro': [''],

       

    });
    this.empresasForm.valueChanges.subscribe(data => this.onValueChanged(data));
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
