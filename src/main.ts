import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { CashServiceService } from './app/cash-service.service';
import { environment } from './environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    CashServiceService
  ]
}).catch(err => console.error(err));
