import { Component, OnInit } from '@angular/core';
import { FalarContabilidadeModel } from './falar-contabilidade.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-falar-contabilidade',
  templateUrl: './falar-contabilidade.component.html',
  styleUrls: ['./falar-contabilidade.component.scss']
})
export class FalarContabilidadeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
