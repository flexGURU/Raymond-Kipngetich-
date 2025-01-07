import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-consult',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './consult.component.html',
  styleUrl: './consult.component.css'
})
export class ConsultComponent {

   skills = [
    {
      title: "Cloud Architecture",
      description: "Expert guidance in designing and implementing scalable cloud infrastructures. Ensuring security, cost-efficiency, and long-term growth for cloud-based solutions."
    },
    {
      title: "IT Solutions & Strategy",
      description: "Strategic IT solutions that enhance business productivity and agility. Helping organizations modernize systems and optimize existing IT frameworks."
    },
    {
      title: "Emerging Technologies & Innovation",
      description: "Leverage emerging technologies for operational efficiency and competitive advantage. Delivering innovative cloud solutions tailored to each business’s specific needs."
    },
    {
      title: "Enterprise IT Systems",
      description: "Creating efficient enterprise IT systems to reduce costs and improve performance. Helping organizations build scalable solutions that optimize business processes and technology."
    }
  ];
  

}
