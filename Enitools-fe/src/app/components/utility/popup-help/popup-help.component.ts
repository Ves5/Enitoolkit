import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-popup-help',
  standalone: true,
  templateUrl: './popup-help.component.html',
  styleUrls: ['./popup-help.component.css'],
  imports: [NgbPopoverModule, CommonModule, MatIconModule, MatButtonModule]
})
export class PopupHelpComponent {

  @Input() popupShow: boolean = true;
  @Input() popupText: string = "<hr>";

}
