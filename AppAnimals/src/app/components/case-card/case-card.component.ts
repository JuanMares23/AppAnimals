import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-case-card',
  templateUrl: './case-card.component.html',
  styleUrls: ['./case-card.component.css'],
})
export class CaseCardComponent {
  @Input() img: string;
  @Input() user: any;
  @Input() description: string;
  @Input() vet: any;
  @Input() caseId: string;
}
