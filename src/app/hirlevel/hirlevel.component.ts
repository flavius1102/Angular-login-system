import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-hirlevel',
  templateUrl: './hirlevel.component.html',
  styleUrls: ['./hirlevel.component.css']
})
export class HirlevelComponent implements OnInit {
  @ViewChild('hirlevel', {static: false}) regForm: NgForm;

  hirlevelUser = {
    hirlevelNev: '',
    hirlevelEmail: ''
};
  hirlevelElkuldve = false;


  hirlevelSubmit() {
    this.hirlevelElkuldve = true;
    this.hirlevelUser.hirlevelNev = this.regForm.value.hirlevelNev;
    this.hirlevelUser.hirlevelEmail = this.regForm.value.hirlevelEmail;
    console.log(this.regForm.value.hirlevelUser);
    this.regForm.reset();
  }
  constructor() { }

  ngOnInit() {
  }



}
