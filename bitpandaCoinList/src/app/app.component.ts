import { Component, OnInit, Inject } from '@angular/core';
import { ListingsService } from './listings.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { TickerService } from './ticker.service';

export interface DialogData {
  "data": {
    "id": any,
    "name": any,
    "symbol": any,
    "website_slug": any,
    "rank": any,
    "circulating_supply": any,
    "total_supply": any,
    "max_supply": any,
    "quotes": {
      "USD": {
        "price": any,
        "volume_24h": any,
        "market_cap": any,
        "percent_change_1h": any,
        "percent_change_24h": any,
        "percent_change_7d": any
      }
    },
    "last_updated": any
  },
  "metadata": {
    "timestamp": any,
    "error": any
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getListings();
  }
  constructor(
    private listingsService: ListingsService,
    public dialog: MatDialog,
    private tickerService: TickerService) { }
  coinlist = [];
  getListings() {
    return this.listingsService.getListings()
      .subscribe((res: any) => {
        this.coinlist = res.data;
        console.log(this.coinlist);
      });
  }
  startDialogProcess(id: Number) {
    this.getTicker(id)
      .subscribe((data: DialogData) => {
        this.openDialog(data);
      });
  }
  getTicker(id: Number) {
    return this.tickerService.getTicker(id)
  }
  openDialog(data: DialogData) {
    console.log(data);
    this.dialog.open(DialogCoinData, { data });
  }
}


@Component({
  selector: 'dialog-data',
  templateUrl: 'dialog-coin-data.html',
})
export class DialogCoinData {
  constructor(@Inject(MAT_DIALOG_DATA) public coin: DialogData) { }
}
