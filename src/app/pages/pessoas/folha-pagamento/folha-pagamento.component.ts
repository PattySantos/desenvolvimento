import { Component, OnInit } from '@angular/core';
import { FolhaPagamentoModel } from './folha-pagamento.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-folha-pagamento',
  templateUrl: './folha-pagamento.component.html',
  styleUrls: ['./folha-pagamento.component.scss']
})
export class FolhaPagamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
