import {RouterModule,Routes} from '@angular/router';
import {NgModule} from '@angular/core'

import {HomeComponent} from './components/home.component'
import {AboutComponent} from './components/about-component/about.component'

import {UploadComponent} from './components/upload-image/upload-image.component'
import {TakeInformationComponent} from './components/takeInformation-component/takeInformation.component'


const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'upload/image',component:UploadComponent},
  {path:'takeInformation',component:TakeInformationComponent},

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class RoutesModule{}
