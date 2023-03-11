import { Component, OnInit } from '@angular/core';
import { NailsCare } from 'src/app/models/nails-care/nails-care';
import { NailsCareService } from 'src/app/services/nails-care/nails-care.service';

@Component({
  selector: 'app-nails-care',
  templateUrl: './nails-care.component.html',
  styleUrls: ['./nails-care.component.css'],
})
export class NailsCareComponent implements OnInit {
  nailscare: NailsCare[] = [];
  

  constructor(private _nailsCareService: NailsCareService) {}

  ngOnInit(): void {
    this.listNailsCare();
  }

  listNailsCare() {
    this._nailsCareService.getNailsCare().subscribe((data) => {
      this.nailscare = data;
    });
  }

  
}
