import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {LayoutService} from '@app/core/layout/services/layout.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterViewInit {
  @ViewChild('footer') footerElement! : ElementRef<HTMLElement>;
  constructor(private layoutService: LayoutService) {
  }

  currentDate = new Date();

  ngAfterViewInit(): void {
    const height = this.footerElement.nativeElement.offsetHeight;
    this.layoutService.footerHeight.set(height);
  }

}
