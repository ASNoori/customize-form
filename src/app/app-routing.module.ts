import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppComponent } from './app.component';
import { RetrialComponent } from './retrial/retrial.component';
import { TrialComponent } from './trial/trial.component';
import { SampleDarkThemeComponent } from './sample-dark-theme/sample-dark-theme.component';

const routes: Routes = [
  {
    path: 'content',
    component:ContentComponent
  },
  {
    path: 'footer',
    component:FooterComponent
  },
  {
    path: 'form',
    component:FormComponent
  },
{
  path:'sidebar',
  component:SideNavComponent
},
{
  path:'',
  component:AppComponent
},
{
  path:'retrial',
  component:RetrialComponent
},
{
  path:'trial',
  component:TrialComponent
},
{
  path:'darksample',
  component:SampleDarkThemeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
