import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DragdropPageRoutingModule } from './dragdrop-routing.module';

import { DragdropPage } from './dragdrop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DragdropPageRoutingModule
  ],
  declarations: [DragdropPage]
})
export class DragdropPageModule {}
