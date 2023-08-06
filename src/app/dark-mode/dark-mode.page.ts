import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.page.html',
  styleUrls: ['./dark-mode.page.scss'],
})
export class DarkModePage implements OnInit {
  dark = false;

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {}

  toggleDarkMode() {
    this.dark = !this.dark;
    document.body.classList.toggle('dark', this.dark);
  }
  
}
