import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompteCreationPage } from './compte-creation.page';

const routes: Routes = [
  {
    path: '',
    component: CompteCreationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompteCreationPageRoutingModule {}
