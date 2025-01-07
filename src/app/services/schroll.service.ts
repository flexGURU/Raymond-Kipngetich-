import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchrollService {

  constructor(private viewportScroller: ViewportScroller) { }

  
  scrollToSection(fragment){
    this.viewportScroller.scrollToAnchor(fragment)

  }
}
