import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  imports: [
    TranslatePipe
  ],
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  protected data = [
    {
      id: 1,
      label: 'Frontend',
      content: [
        {id: 1, title: "CSS/SASS", },
        {id: 2, title: "HTML", },
        {id: 3, title: "JavaScript"},
        {id: 4, title: "TypeScript"},
        {id: 5, title: "Angular"},
      ]
    },
    {
      id: 2,
      label: 'Backend',
      content: [
        {id: 1, title: "Java"},
        {id: 2, title: "Node"},
        {id: 3, title: "Nest"},
        {id: 5, title: "Rest API"},
        {id: 6, title: "SQL"},
        {id: 7, title: "MongoDB/Postgres"},
      ]
    },
    {
      id: 3,
      label: 'Tools',
      content: [
        {id: 1, title: "Git"},
        {id: 2, title: "Docker"},
        {id: 3, title: "Yarn"},
        {id: 4, title: "NPM"},
        {id: 4, title: "Jira"},
        {id: 4, title: "Confluence"},
      ]
    },
    {
      id: 4,
      label: 'Testing',
      content: [
        {id: 1, title: "Karma"},
        {id: 2, title: "Jasmine"},
        {id: 3, title: "Cypress"},
        {id: 4, title: "JMeter"},
      ]
    },
    {
      id: 4,
      label: 'Soft',
      content: [
        {id: 1, title: "Communication"},
        {id: 2, title: "Problem Solving"},
        {id: 3, title: "Critical Thinking"},
        {id: 4, title: "English C1"},
        {id: 5, title: "Polish Native"},
      ]
    }
  ];
}
