import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-bejelentkezes',
  templateUrl: './bejelentkezes.component.html',
  styleUrls: ['./bejelentkezes.component.css']
})
export class BejelentkezesComponent implements OnInit {
  @ViewChild('bejelentkezes', {static: false}) regForm: NgForm;

  bejelentkezesUser = {
    bejelentkezesNev: '',
    bejelentkezesJelszo: ''
  };

  helyesUser = {
    helyesNev: 'Béla',
    helyesJelszo: 'belaAkiraly'
  };
  bejelentkezesElkuldve = false;


  bejelentkezesSubmit() {
    this.bejelentkezesUser.bejelentkezesNev = this.regForm.value.bejelentkezesNev;
    this.bejelentkezesUser.bejelentkezesJelszo = this.regForm.value.bejelentkezesJelszo;
    console.log(this.regForm.value.bejelentkezesUser);
    console.log(this.helyesUser);
    this.osszehasonlit();
  }

  osszehasonlit() {
    // tslint:disable-next-line:max-line-length
    if (this.regForm.value.bejelentkezesUser.bejelentkezesNev === this.helyesUser.helyesNev && this.regForm.value.bejelentkezesUser.bejelentkezesJelszo === this.helyesUser.helyesJelszo) {
      this.bejelentkezesElkuldve = true;
      document.getElementById('osszehasonlit').setAttribute('href', '/rolam');
      this.regForm.reset();
    } else {
      alert('Hibás felhasználónév vagy jelszó!');
      this.bejelentkezesElkuldve = false;
      this.regForm.reset();
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
