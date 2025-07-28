import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ux-design',
  imports: [],
  templateUrl: './ux-design.component.html',
  styleUrl: './ux-design.component.scss',
  standalone: true
})
export class UxDesignComponent {


  projects: { title: string; url: SafeResourceUrl }[];

  constructor(private sanitizer: DomSanitizer) {
    this.projects = [
      {
        title: 'AiAgent',
        url: this.sanitizeUrl(
          'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/WK9VEdOC2BQGNzcyRmi6nv/AiAgent?m=auto&t=tRcYIeeLv6AFZgvc-1'
        ),
      },

    ];
  }

  private sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}
