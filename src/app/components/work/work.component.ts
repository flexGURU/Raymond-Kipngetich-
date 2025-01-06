import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {

  workExp = [
    {
      company: "HUAWEI",
      duration: "2022 - present",
      position: "Enterprise IT and Cloud Solutions Architect",
      highlights: [
        "Expert in enterprise storage, backup, private, and hybrid cloud solutions, ensuring seamless integration and modernization.",
  "Strategic advisor in IT/Cloud Go-To-Market strategies, technical RFP guidance, and Proof of Concept (POC) leadership for CXOs and enterprises.",
  "Innovator in product launches, marketing initiatives, and leveraging emerging technologies for cutting-edge infrastructure solutions."
      ]

    },
    {
      company: "HUAWEI",
      duration: "July 2022 – November 2022",
      position: "Wireless Engineer",
      highlights: [
        "Deploy Huawei 5G and LTE TDD 2600 sites with a focus on quality standards.",
        "Provide post-deployment customer training and site knowledge handover.",
        "Manage channel partners to ensure seamless and high-quality delivery."
      ]

    },
  ]

}
