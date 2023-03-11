import { Component, OnInit } from '@angular/core';
import { Manicurist } from 'src/app/models/manicurist/manicurist';
import { ManicuristService } from 'src/app/services/manicurist/manicurist.service';

@Component({
  selector: 'app-manicurist',
  templateUrl: './manicurist.component.html',
  styleUrls: ['./manicurist.component.css'],
})
export class ManicuristComponent implements OnInit {
  manicurists: Manicurist[] = [];

  constructor(private _manicuristService: ManicuristService) {}

  ngOnInit(): void {
    this.listManicurists();
  }

  listManicurists() {
    this._manicuristService.getManicurists().subscribe((data) => {
      this.manicurists = data;
    });
  }
}
