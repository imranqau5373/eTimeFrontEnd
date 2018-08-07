import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ETimeRoutingModule } from './e-time-routing.module';
import { ETimeComponent } from './e-time.component';
import { ETimeEntriesComponent } from './e-time-entries/e-time-entries.component';
import { ETimeAddTimeComponent } from './e-time-add-time/e-time-add-time.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ETimeRoutingModule
  ],
  declarations: [ETimeComponent, ETimeEntriesComponent, ETimeAddTimeComponent]
})
export class ETimeModule { }
