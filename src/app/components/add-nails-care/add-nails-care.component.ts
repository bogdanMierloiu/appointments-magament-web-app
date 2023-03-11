import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateNailsCare } from 'src/app/models/nails-care/create-nails-care';
import { NailsCareService } from 'src/app/services/nails-care/nails-care.service';

@Component({
  selector: 'app-add-nails-care',
  templateUrl: './add-nails-care.component.html',
  styleUrls: ['./add-nails-care.component.css'],
})
export class AddNailsCareComponent implements OnInit {
  nailscareToAdd!: CreateNailsCare;

  constructor(private _nailsCareService: NailsCareService, private router: Router) {}

  ngOnInit(): void {
    this.nailscareToAdd = new CreateNailsCare();
  }

  addNailsCare(): void {
    this._nailsCareService.createNailsCare(this.nailscareToAdd).subscribe(
      () => {
        console.log('Nails care added successfully');
        this.router.navigate(['/nailscare']);
      },
      (error) => {
        console.error('Error adding nails care:', error);
      }
    );
  }
}
