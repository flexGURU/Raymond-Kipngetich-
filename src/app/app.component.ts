import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutComponent } from "./components/about/about.component";
import { WorkComponent } from "./components/work/work.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { AchievemntsComponent } from "./components/achievemnts/achievemnts.component";
import { ContactComponent } from "./components/contact/contact.component";
import { GalleryComponent } from './components/gallery/gallery.component';
import { ConsultComponent } from "./components/consult/consult.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent, AboutComponent, WorkComponent,
    SkillsComponent, AchievemntsComponent, ContactComponent,
    GalleryComponent,
    ConsultComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'raymond';

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
      this.activatedRoute.fragment.subscribe((fragment : string | null) => {
        if (fragment) {
          this.scrollToPage(fragment)
        }
      })
  }

  scrollToPage(fragment : any){
    const element = document.getElementById(fragment)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }


}
