import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  animations: [
    trigger('initAnimate', [
      transition(':enter',[
        animate('5s', keyframes([
          style({ left: '200px' ,offset: 0.2}),
          style({ left: '-360px' ,offset: 0.5 }),
          style({ left: '250px' ,offset: 0.7}),
          style({ left: '0px', transform: 'rotate(360deg)',offset: 1}),
        ]))
      ])
    ]),
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
export class AccordionComponent {
  downIcon = faCaretDown
  rightIcon = faCaretRight

  showContent1 = false
  showContent2 = false
  showContent3 = false
  activeEL!: any
  initAnimate1 = true

  ngAfterViewInit(){
    this.initAnimate1 = true
  }

  toggle(id: string) {
    switch (id) {
      case 'section1':
        this.showContent1 = !this.showContent1
        break;
      case 'section2':
        this.showContent2 = !this.showContent2
        break;
      case 'section3':
        this.showContent3 = !this.showContent3
        break;
      default:
        break;
    }
  }

  onClick(e: any) {
    if (this.activeEL == e.currentTarget.id) {
      this.toggle(this.activeEL)
      this.activeEL = null
      return
    }

    if (this.activeEL) {
      this.toggle(this.activeEL)
    }

    this.activeEL = e.currentTarget.id
    this.toggle(this.activeEL)
  }

}
