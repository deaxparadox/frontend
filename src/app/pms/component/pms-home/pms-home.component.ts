import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PmsHttpService } from '../../services/pms-http.service';
import { Heading } from '../../services/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pms-home',
  templateUrl: './pms-home.component.html',
  styleUrl: './pms-home.component.scss'
})
export class PmsHomeComponent implements OnInit {
  constructor(
    private pmsHttpService: PmsHttpService,
    private activateRoute: ActivatedRoute
  )
  {}

  ngOnInit(): void {
      this.get_headings()
  }

  headings?: Heading[];
  async get_headings() {
    this.pmsHttpService.get_headings().subscribe(
      h => {
        this.headings = h;
        // console.log(h);
      }
    )
  }
}
