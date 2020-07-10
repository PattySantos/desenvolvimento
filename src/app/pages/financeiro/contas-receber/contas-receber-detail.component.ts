import { Component, OnInit } from '@angular/core';
import { ContasReceberModel } from './contas-receber.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-contas-receber-detail',
  templateUrl: './contas-receber-detail.component.html',
  styleUrls: ['./contas-receber.component.scss']
})
export class ContasReceberDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
