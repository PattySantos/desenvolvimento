import { Component, OnInit } from '@angular/core';
import { ProdutosModel } from './produtos.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-produtos-detail',
  templateUrl: './produtos-detail.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosDetailComponent implements OnInit {

  produto: ProdutosModel;
 produtosForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
  }
  
  public back() {
    this._router.navigate(['/pages/cadastros/produtos/']);
}
  onValueChanged(data?: any) {
    if (!this.produtosForm) { return; }
    const form = this.produtosForm;

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
    this.produtosForm = this.fb.group({
        'id': [''],
        'nome': [''],
        'cpf': [''],
        'dataCadastro': [''],

       

    });
    this.produtosForm.valueChanges.subscribe(data => this.onValueChanged(data));
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
