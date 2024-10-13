import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CashServiceService {
  private denominations: number[] = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

  constructor() {}

  getMinimumNotes(amount: number): { denomination: number; count: number }[] {
    const result: { denomination: number; count: number }[] = [];

    for (const denomination of this.denominations) {
      if (amount === 0) break;

      const count = Math.floor(amount / denomination);
      if (count > 0) {
        result.push({ denomination, count });
      }

      amount -= count * denomination;
    }

    return result;
  }
}
