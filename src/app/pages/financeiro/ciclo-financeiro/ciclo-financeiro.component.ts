import { Component, OnInit } from '@angular/core';
import { CicloFinanceiroModel } from './ciclo-financeiro.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-ciclo-financeiro',
  templateUrl: './ciclo-financeiro.component.html',
  styleUrls: ['./ciclo-financeiro.component.scss']
})
export class CicloFinanceiroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
