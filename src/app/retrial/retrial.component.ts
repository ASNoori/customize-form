import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retrial',
  templateUrl: './retrial.component.html',
  styleUrls: ['./retrial.component.scss']
})
export class RetrialComponent implements OnInit {
  // @ViewChild('sidenav') sidenav!: MatSidenav;
  isSidebarOpen:boolean = false;
  headerstat: any;
  headerstatdata: any;
  hstat: any;
  fixed!: boolean;
  sticky!: boolean;
  footerstatdata: any;
  footerstat: any;
  fstat: any;
  footfixed!: boolean;
  nav:any;
  sidebarstatdata: any;
  sidestat: any;
  sdstat: any;
  sidecollapse!: boolean;
  prcolorstatdata: any;
  prcolorstat: any;
  prstat: any;
  sccolorstat: any;
  sccolorstatdata: any;
  scstat: any;
  sidefixed!: boolean;
  sidescroll!: boolean;
  trcolorstat: any;
  trcolorstatdata: any;
  trstat: any;
  foothide!: boolean;
  toggle: any;
  constructor(private router: Router){}
  ngOnInit(): void {
    this.headerstatdata = localStorage.getItem('formData');
    this.headerstat = JSON.parse(this.headerstatdata);
    this.hstat = this.headerstat.header;
    if (this.hstat === 'fixed') {
      this.fixed = true;
    } else if (this.hstat === 'hide') {
      this.fixed = false;
    }
    else{
      this.fixed=false;
      this.sticky = true;
    }
    this.footerstatdata = localStorage.getItem('formData');
    this.footerstat = JSON.parse(this.footerstatdata);
    this.fstat = this.footerstat.footer;
    if (this.fstat === 'fixed') {
      this.footfixed = true;
      this.foothide = false;
    } else if (this.fstat === 'hide') {
      this.footfixed = false;
      this.foothide = true;

    }
    this.sidebarstatdata = localStorage.getItem('formData');
    this.sidestat = JSON.parse(this.sidebarstatdata);
    this.sdstat = this.sidestat.sidebar;
    if (this.sdstat === 'collapsed') {
      this.sidecollapse = true;
      console.log(this.sidecollapse);

    } else if (this.sdstat === 'fixed') {
      this.sidefixed = true;
      console.log(this.sidefixed);
    }else{
      this.sidescroll = true;
    }
    this.prcolorstatdata = localStorage.getItem('formData');
    this.prcolorstat = JSON.parse(this.prcolorstatdata);
    this.prstat = this.prcolorstat.prcolor;
    console.log(this.prstat.hex)
    this.sccolorstatdata = localStorage.getItem('formData');
    this.sccolorstat = JSON.parse(this.sccolorstatdata);
    this.scstat = this.sccolorstat.sccolor;
    this.trcolorstatdata = localStorage.getItem('formData');
    this.trcolorstat = JSON.parse(this.trcolorstatdata);
    this.trstat = this.trcolorstat.trcolor;
// for slidetoggle value
    this.trcolorstatdata = localStorage.getItem('formData');
    this.trcolorstat = JSON.parse(this.trcolorstatdata);
    this.toggle = this.trcolorstat.toggle;
  }
  // toggleSidebar() {
  //   console.log(!this.isSidebarOpen);
  //   this.isSidebarOpen = !this.isSidebarOpen;
    // this.sidenav.toggle();
    // console.log(this.isSidebarOpen);
  // }
 

}
