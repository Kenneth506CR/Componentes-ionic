import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  controls = [
    { name: 'accordion', icon: 'albums' },
    { name: 'action', icon: 'arrow-forward-circle' },
    { name: 'alert', icon: 'alert-circle' },
    { name: 'avatar', icon: 'person-circle' },
    { name: 'badge', icon: 'bookmark' },
    { name: 'breadcrumbs', icon: 'grid' },
    { name: 'button', icon: 'caret-forward' },
    { name: 'card', icon: 'card' },
    { name: 'checkbox', icon: 'checkmark-circle' },
    { name: 'chip', icon: 'pricetag' },
    { name: 'content', icon: 'document-text' },
    { name: 'date-time-picker', icon: 'calendar' },
    { name: 'floating-action-button', icon: 'add' },
    { name: 'grid', icon: 'grid' },
    { name: 'icons', icon: 'apps' },
    { name: 'infinite-scroll', icon: 'infinite' },
    { name: 'input', icon: 'text' },
    { name: 'item', icon: 'list' },
    { name: 'item-group', icon: 'layers' },
    { name: 'list', icon: 'list-circle' },
    { name: 'loading', icon: 'refresh-circle' },
    { name: 'menu', icon: 'menu' },
    { name: 'modal', icon: 'albums' },
    { name: 'navigation', icon: 'navigate' },
    { name: 'note', icon: 'clipboard' },
    { name: 'picker', icon: 'grid' },
    { name: 'popover', icon: 'menu' },
    { name: 'progress-bar', icon: 'remove-outline' },
    { name: 'radio', icon: 'radio-button-on' },
    { name: 'range', icon: 'resize' },
    { name: 'refresher', icon: 'refresh' },
    { name: 'reorder', icon: 'reorder-three' },
    { name: 'searchbar', icon: 'search' },
    { name: 'segment', icon: 'toggle' },
    { name: 'select', icon: 'caret-down' },
    { name: 'skeleton-text', icon: 'hourglass' },
    { name: 'spinner', icon: 'ellipse' },
    { name: 'tabs', icon: 'copy' },
    { name: 'text', icon: 'text' },
    { name: 'thumbnail', icon: 'image' },
    { name: 'toast', icon: 'alert' },
    { name: 'toggle', icon: 'toggle' },
    { name: 'toolbar', icon: 'construct' },
    { name: 'dark-mode', icon: 'moon' }
  ];

  constructor(private navCtrl: NavController) {}

  navigateToControl(control: string) {
    this.navCtrl.navigateForward(control);
  }
}
