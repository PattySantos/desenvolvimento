import { Component, OnInit } from '@angular/core';
import { MargemContribuicaoModel } from './margem-contribuicao.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-margem-contribuicao-detail',
  templateUrl: './margem-contribuicao-detail.component.html',
  styleUrls: ['./margem-contribuicao.component.scss']
})
export class MargemContribuicaoDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
