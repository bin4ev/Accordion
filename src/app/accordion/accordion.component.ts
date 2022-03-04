import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { AccordionSectionComponent } from '../accordion-section/accordion-section.component';
import { AccordionService } from '../accordion.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements AfterContentInit {
  @ContentChildren(AccordionSectionComponent) queryList!: QueryList<AccordionSectionComponent>

  compChildren!: any

  constructor(private accService: AccordionService) {
    this.accService.$showRandomId.subscribe(id => this.hideContent(id))
  }

  ngAfterContentInit(): void {
    this.compChildren = this.queryList.toArray()
  }

  hideContent(id: any) {
    for (let comp of this.compChildren) {  
      if (comp.randomId != id) {
        comp.showContent = false
      }
    }
  }

}

