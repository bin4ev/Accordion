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
  activeElId!: any

  constructor(private accService: AccordionService) {
    this.accService.$showRandomId.subscribe(id => this.hideContent(id))
  }

  ngAfterContentInit(): void {
    this.compChildren = this.queryList.toArray()
    for (let i = 0; i < this.compChildren.length; i++) {
      this.compChildren[i].id = i
    }
  }

  hideContent(id: any) {
    if (this.activeElId == undefined) {
      this.activeElId = id
      return
    }

    this.compChildren[this.activeElId].showContent = false
    this.activeElId = id
  }
}

