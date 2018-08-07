import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ETimeComponent } from './e-time.component';
import { ETimeEntriesComponent } from './e-time-entries/e-time-entries.component';
import { ETimeAddTimeComponent } from './e-time-add-time/e-time-add-time.component';

const routes: Routes = [
  {
      path: '',
      component: ETimeComponent 
  },
  {
      path: 'time',
      component: ETimeEntriesComponent    
  },
  {
      path: 'addtime',
      component: ETimeAddTimeComponent    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ETimeRoutingModule { }
