import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { HttpApiService } from '../shared/services/http-api.service';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, HttpModule, FormsModule],
    declarations: [LoginComponent],
    providers: [HttpApiService],
})
export class LoginModule {}
