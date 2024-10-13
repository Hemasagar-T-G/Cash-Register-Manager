import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CashServiceService } from '../cash-service.service';

@Component({
  selector: 'app-cash-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cash-register.component.html',
  styleUrls: ['./cash-register.component.scss']
})
export class CashRegisterComponent {
  totalAmount: any;
  amountPaid: any;
  change: any;

  minimumNotes = [
    { denomination: 2000, count: 0 },
    { denomination: 500, count: 0 },
    { denomination: 200, count: 0 },
    { denomination: 100, count: 0 },
    { denomination: 50, count: 0 },
    { denomination: 20, count: 0 },
    { denomination: 10, count: 0 },
    { denomination: 5, count: 0 },
    { denomination: 2, count: 0 },
    { denomination: 1, count: 0 }
  ];

  constructor(private cashService: CashServiceService) {}

  calculateChange() {
    if (this.amountPaid >= this.totalAmount) {
      this.change = this.amountPaid - this.totalAmount;
      const calculatedNotes = this.cashService.getMinimumNotes(this.change);

      this.minimumNotes.forEach(note => {
        const calculatedNote = calculatedNotes.find(n => n.denomination === note.denomination);
        note.count = calculatedNote ? calculatedNote.count : 0;
      });
    } else {
      alert('Amount paid is less than the total amount.');
    }
  }
  
  reset(){
    this.amountPaid='';
    this.totalAmount='';
    this.change='';
    this.minimumNotes.forEach(note => note.count = 0);
  }
}
