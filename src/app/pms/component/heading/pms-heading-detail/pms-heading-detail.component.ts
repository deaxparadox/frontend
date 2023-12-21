import { Component, OnInit } from '@angular/core';
import { PmsHttpService } from '../../../services/pms-http.service';
import { ActivatedRoute } from '@angular/router';
import { Heading } from '../../../services/models';
import { SelectService } from '../../../services/select/select.service';

@Component({
  selector: 'app-pms-heading-detail',
  templateUrl: './pms-heading-detail.component.html',
  styleUrl: './pms-heading-detail.component.scss'
})
export class PmsHeadingDetailComponent implements OnInit {
  constructor(
    private pmsHttpService: PmsHttpService,
    private activateRoute: ActivatedRoute,
    private select: SelectService,
  ) { }

  ngOnInit(): void {
    this.get_heading_detail()
  }

  heading_detail?: Heading;

  async get_heading_detail() {
    const id: string | null = this.activateRoute.snapshot.paramMap.get("id");
    this.pmsHttpService.get_heading(id).subscribe(
      h => {
        this.heading_detail = h;
        this.select.set(h);
        // console.log(h);
      }
    );
  }

}
