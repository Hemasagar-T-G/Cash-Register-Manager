import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CashRegisterComponent } from './cash-register/cash-register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CashRegisterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cash-Register-Manager';
}
