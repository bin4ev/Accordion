import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {
  private randomId =  new Subject()

  $showRandomId = this.randomId.asObservable()
  
  setRandomId(id: any){
    this.randomId.next(id)
  }
}
