import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 footerstat:any;
footerstatdata:any;
  fstat:any;
    footfixed!: boolean;
    prcolorstatdata: any;
  prcolorstat: any;
  prstat: any;
  sccolorstat: any;
  sccolorstatdata: any;
  scstat: any;
  ngOnInit(): void {
    this.footerstatdata=localStorage.getItem('formData')
    this.footerstat = JSON.parse(this.footerstatdata)
    this.fstat = this.footerstat.footer;
    if(this.fstat==='fixed'){
      this.footfixed=true;
    }
    else{
      this.footfixed = false;
    }
    this.prcolorstatdata = localStorage.getItem('formData');
    this.prcolorstat = JSON.parse(this.prcolorstatdata);
    this.prstat = this.prcolorstat.prcolor;
    console.log(this.prstat.hex) 
    this.sccolorstatdata = localStorage.getItem('formData');
    this.sccolorstat = JSON.parse(this.sccolorstatdata);
    this.scstat = this.sccolorstat.sccolor;
  }


}
