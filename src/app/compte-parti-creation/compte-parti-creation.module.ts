import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComptePartiCreationPageRoutingModule } from './compte-parti-creation-routing.module';

import { ComptePartiCreationPage } from './compte-parti-creation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComptePartiCreationPageRoutingModule
  ],
  declarations: [ComptePartiCreationPage],
  exports:[]
})
export class ComptePartiCreationPageModule {}
