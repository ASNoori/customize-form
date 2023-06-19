import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  title = 'customize-form';
  // public disabled = false;
  public color: ThemePalette = 'primary';
  public touchUi = false;
  update = false;
  customizeform: any;
  edit!: boolean;
  detail!: any;
  imgname: any;
  ImageBase64!: any;
  url: any;
  toggle= false;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.getdata();
    this.customizeform = this.fb.group({
      header: new FormControl(),
      toggle: new FormControl(),
      prcolor: new FormControl(),
      sccolor: new FormControl(),
      trcolor: new FormControl(),
      logo: new FormControl(),
      fav: new FormControl(),
      title: new FormControl(),
      logosize: new FormControl(),
      sidebar: new FormControl(),
      footer: new FormControl(),
      position: new FormControl(),
    });
  }
  uploadlogo() {
    this.customizeform.value.logo = this.ImageBase64;
    console.log(this.customizeform.value.logo);
  }
  uploadfav() {
    this.customizeform.value.fav = this.ImageBase64;
    console.log(this.customizeform.value.logo);
  }
  onSubmit() {
    let formData = this.customizeform.value;
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(formData);
  }
  onEdit() {
    this.edit = true;
    if (this.edit) {
      let formData = localStorage.getItem('formData');
      formData = this.customizeform.value;
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  }
  getdata() {
    this.customizeform = localStorage.getItem('formData');
  }
  onfileSelected(event: any) {
    if (event.target.files) {
      const file = event.target.files;

      console.log(file);
      console.log(file[0].name);
      this.imgname = file[0].name;
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.ImageBase64 = event.target.result;
        console.log(this.ImageBase64);
        // this.url = atob(this.ImageBase64);
        // this.url = event.target.result
      };
    }
  }
  onuploadfavicon(event: any) {
    // const file = event.target.files[0];
    // const reader = new FileReader();

    // reader.onload = () => {
    // //   const imageBase64 = reader.result as string;
    //       this.ImageBase64 = reader.result as string;

    // //   this.localStorageService.setItem('uploadedImage', imageBase64);

    // };
    if (event.target.files) {
      const file = event.target.files;

      console.log(file);
      console.log(file[0].name);
      this.imgname = file[0].name;
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.ImageBase64 = event.target.result
        console.log(this.ImageBase64);
        console.log(this.url);
      }
    }
  }
  className = '';
  onToggleChange(event: any) {
    const darkClassName = 'darkMode';
    this.customizeform.value.toggle=event.checked;
   
    this.className = event.checked ? darkClassName : '';
  }
}

