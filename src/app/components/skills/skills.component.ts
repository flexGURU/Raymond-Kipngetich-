import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillCategories = [
    {
      title: "Storage Services",
      icon: "fas fa-server",
      skills: [
        "All-Flash Storage",
        "Flash-to-Flash-To-Anything (F2F2X)",
        "Backup Storage",
        "DCS Virtualization",
        "eBackup",
        "Pro-active O&M(DME)",
        "Object Storage",
        "Archiving",
        "Distributed Storage",
        "Multi-Layered Ransomware Protection"
      ]
    },
    {
      title: "Huawei Cloud",
      icon: "fas fa-cloud",
      skills: [
        "Elastic Cloud Server (ECS)",
        "Data Replication Service (DRS)",
        "Cloud Security",
        "Cloud Container Engine (CCE)",
        "Bare Metal Servers (BMS)",
        "Huawei Cloud Stack (HCS)"
      ]
    },
    {
      title: "AWS Cloud Services",
      icon: "fab fa-aws",
      skills: [
        "EC2",
        "VPC",
        "CloudFront",
        "Elastic Container Services",
        "Elastic Load Balancing"
      ]
    },
    {
      title: "Architecture Design",
      icon: "fas fa-code",
      skills: [
        "Scalability",
        "High Availability",
        "Performance Optimization",
        "Architectural Patterns",
        "Best Practices"
      ]
    },
    {
      title: "Compliance & Governance",
      icon: "fas fa-shield-alt",
      skills: [
        "Security Considerations",
        "Compliance Frameworks",
        "Risk Assessment",
        "Governance Models"
      ]
    },
    {
      title: "Technical Communication",
      icon: "fas fa-comments",
      skills: [
        "Stakeholder Communication",
        "Technical Documentation",
        "Solution Value Articulation",
        "Client Presentations"
      ]
    },
    {
      title: "Documentation",
      icon: "fas fa-file-alt",
      skills: [
        "High-level Designs",
        "Low-level Designs",
        "RFP Responses",
        "Technical Presentations",
        "Solution Documentation"
      ]
    }
  ];
}
