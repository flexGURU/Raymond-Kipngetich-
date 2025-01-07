import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  isOpen: boolean = false

  toggle(){
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
  
  closeMenu(){
    this.isOpen = false;
    document.body.style.overflow = 'auto';

  }

  scrollToSection(fragment){
    this.viewportScroller.scrollToAnchor(fragment)

  }



}
