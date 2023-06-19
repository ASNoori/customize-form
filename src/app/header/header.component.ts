import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuChangeEvent = new EventEmitter<any>();
  isMenuOpen: boolean = false;
  headerstat:any;
  headerstatdata:any;
  hstat:any;
  fixed!: boolean;
  sticky!: boolean;
  logo:any;
  prcolorstatdata: any;
  prcolorstat: any;
  prstat: any;
  sccolorstat: any;
  sccolorstatdata: any;
  scstat: any;
constructor(private router: Router) { }

  ngOnInit(): void {
    this.headerstatdata=localStorage.getItem('formData')
    this.headerstat = JSON.parse(this.headerstatdata)
    this.hstat = this.headerstat.header;
    this.logo = this.headerstat.logo;
    if(this.hstat==='sticky'){
      this.sticky=true;
    }
    else if(this.hstat==='fixed'){
      this.fixed=true;
    }
    this.prcolorstatdata = localStorage.getItem('formData');
    this.prcolorstat = JSON.parse(this.prcolorstatdata);
    this.prstat = this.prcolorstat.prcolor;
    console.log(this.prstat.hex)
    this.sccolorstatdata = localStorage.getItem('formData');
    this.sccolorstat = JSON.parse(this.sccolorstatdata);
    this.scstat = this.sccolorstat.sccolor;
  }

  // menuToggler(){
  //   this.isMenuOpen = !this.isMenuOpen;
  //   this.menuChangeEvent.emit(this.isMenuOpen);
  // }

}
