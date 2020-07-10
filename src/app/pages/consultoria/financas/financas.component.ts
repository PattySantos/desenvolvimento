import { Component, OnInit } from '@angular/core';
import { FinancasModel } from './financas.model'
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-financas',
  templateUrl: './financas.component.html',
  styleUrls: ['./financas.component.scss']
})
export class FinancasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
