import { Component } from '@angular/core';
import { PmsHttpService } from '../../../services/pms-http.service';
import { ActivatedRoute } from '@angular/router';
import { S, SelectService } from '../../../services/select/select.service';
import { Heading } from '../../../services/models';

@Component({
  selector: 'app-pms-heading-update',
  templateUrl: './pms-heading-update.component.html',
  styleUrl: './pms-heading-update.component.scss'
})
export class PmsHeadingUpdateComponent {
  constructor(
    private pmsHttpService: PmsHttpService,
    private activateRoute: ActivatedRoute,
    private select: SelectService,
  ) { }

  ngOnInit(): void {
    // this.get_heading_detail()
    console.log(this.select.get());
    this.detail = this.select.get();
  }



  detail?: S;

  // async get_heading_detail() {
  //   const id: string | null = this.activateRoute.snapshot.paramMap.get("id");
  //   this.pmsHttpService.get_heading(id).subscribe(
  //     h => {
  //       this.detail = h;
  //       this.select.set(h);
  //       // console.log(h);
  //     }
  //   );
  // }
}
