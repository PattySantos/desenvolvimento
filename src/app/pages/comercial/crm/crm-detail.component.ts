import { Component, OnInit } from '@angular/core';
import { CrmModel } from './crm.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-crm-detail',
  templateUrl: './crm-detail.component.html',
  styleUrls: ['./crm.component.scss']
})
export class CrmDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
