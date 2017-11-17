import { Component } from '@angular/core';
import {InformationModel} from './information.model'
import {InformationService} from '../information.service'
import {Router} from '@angular/router'

declare var jquery:any;
declare var $ :any;

let asd=''

@Component({

  templateUrl: './takeInformation.component.html',
})
export class TakeInformationComponent {
  takeInformationFromForm:InformationModel=new InformationModel();
  information:string=''

  constructor(
    private informationService:InformationService,
    private router:Router
  ){
    $(document).ready(function () {
      console.log('jqruie go go')


      $.ajax({
        method: "POST",
        url:  'http://localhost:3000/giveInformation',
        contentType: "application/json; charset=utf-8",
        data:JSON.stringify({asdf:1234,qwerrr:123213321}),

      success: start123,
        error: error123
      });
      function start123(data){
        console.log(data)
      }
      function error123(error){
        console.log(error)
      }

    });
  }

  takeInformation(){


    this.informationService.giveInformation(this.takeInformationFromForm).
      subscribe(info=>{
        asd=info.text
      console.log(asd)

      $('#showMessage').text(info.text)

    })





    this.router.navigateByUrl('/home')




  }
}
