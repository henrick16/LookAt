import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompteCreationPageRoutingModule } from './compte-creation-routing.module';

import { CompteCreationPage } from './compte-creation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompteCreationPageRoutingModule
  ],
  declarations: [CompteCreationPage]
})
export class CompteCreationPageModule {}
