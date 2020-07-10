import { Component, OnInit } from '@angular/core';
import { FluxoCaixaModel } from './fluxo-caixa.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-fluxo-caixa',
  templateUrl: './fluxo-caixa.component.html',
  styleUrls: ['./fluxo-caixa.component.scss']
})
export class FluxoCaixaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
