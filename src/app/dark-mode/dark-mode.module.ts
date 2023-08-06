import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DarkModePageRoutingModule } from './dark-mode-routing.module';

import { DarkModePage } from './dark-mode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DarkModePageRoutingModule
  ],
  declarations: [DarkModePage]
})
export class DarkModePageModule {}
