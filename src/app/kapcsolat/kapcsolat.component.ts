import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-kapcsolat',
  templateUrl: './kapcsolat.component.html',
  styleUrls: ['./kapcsolat.component.css']
})
export class KapcsolatComponent implements OnInit {
  @ViewChild('kapcsolat', {static: false}) regForm: NgForm;

  kapcsolatUser = {
    kapcsolatNev: '',
    kapcsolatEmail: '',
    kapcsolatUzenet: ''
  };
  kapcsolatElkuldve = false;


  kapcsolatSubmit() {
    this.kapcsolatElkuldve = true;
    this.kapcsolatUser.kapcsolatNev = this.regForm.value.kapcsolatNev;
    this.kapcsolatUser.kapcsolatEmail = this.regForm.value.kapcsolatEmail;
    this.kapcsolatUser.kapcsolatUzenet = this.regForm.value.kapcsolatUzenet;
    console.log(this.regForm.value.kapcsolatUser);
    this.regForm.reset();
  }
  constructor() { }

  ngOnInit() {
  }

}
