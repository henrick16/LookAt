import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComptePartiCreationPage } from './compte-parti-creation.page';

const routes: Routes = [
  {
    path: '',
    component: ComptePartiCreationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComptePartiCreationPageRoutingModule {}
