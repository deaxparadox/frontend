import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PmsHttpService } from '../../services/pms-http.service';
import { Heading } from '../../services/models';

@Component({
  selector: 'app-pms-home',
  templateUrl: './pms-home.component.html',
  styleUrl: './pms-home.component.scss'
})
export class PmsHomeComponent {
  constructor(
    private pmsHttpService: PmsHttpService
  )
  {}

  headings?: Heading[];
  async get_headings() {
    this.pmsHttpService.get_headings().subscribe(
      h => {
        this.headings = h;
        console.log(h);
      }
    )
  }
}
