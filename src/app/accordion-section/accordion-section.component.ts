import { Component, Input } from '@angular/core';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { animate, style, transition, trigger } from '@angular/animations';
import { AccordionService } from '../accordion.service';


@Component({
  selector: 'app-accordion-section',
  templateUrl: './accordion-section.component.html',
  styleUrls: ['./accordion-section.component.css'],
  animations: [
    trigger('slideShowHide', [
      transition(':enter', [
        style({ height: '0px' }),
        animate('300ms', style({ height: '280px' }))
      ]),
      transition(':leave', [
        animate('300ms', style({ height: '0px' }))
      ])
    ])
  ]
})
export class AccordionSectionComponent {
  @Input() title!: any
  
  downIcon = faCaretDown
  rightIcon = faCaretRight

  showContent = false
  id!: any

  constructor(private accService: AccordionService) { }

  onClick() {
    this.showContent = !this.showContent
    this.accService.setRandomId(this.id)
  }
}
