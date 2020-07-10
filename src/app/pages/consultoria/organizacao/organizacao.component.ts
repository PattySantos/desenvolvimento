import { Component, OnInit } from '@angular/core';
import { OrganizacaoModel } from './organizacao.model'
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-organizacao',
  templateUrl: './organizacao.component.html',
  styleUrls: ['./organizacao.component.scss']
})
export class OrganizacaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
