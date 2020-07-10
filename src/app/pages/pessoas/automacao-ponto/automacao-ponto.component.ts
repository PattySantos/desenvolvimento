import { Component, OnInit } from '@angular/core';
import { AutomacaoPontoModel } from './automacao-ponto.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-automacao-ponto',
  templateUrl: './automacao-ponto.component.html',
  styleUrls: ['./automacao-ponto.component.scss']
})
export class AutomacaoPontoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
