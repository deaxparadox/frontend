import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-on-fetch',
  templateUrl: './error-on-fetch.component.html',
  styleUrl: './error-on-fetch.component.scss'
})
export class ErrorOnFetchComponent {
  @Input() errorOccured?: boolean;
  @Input() loadingData?: boolean;
}
