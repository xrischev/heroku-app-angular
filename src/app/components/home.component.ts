import { Component,OnInit } from "@angular/core";
declare var jquery:any;
declare var $ :any;



import {HomeService} from './home.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private homeService:HomeService
  ) {
    $(document).ready(function () {

      $('#showMessage').text('')

      var image = new Image();
      image.src = 'https://hidden-badlands-20774.herokuapp.com/image1';
      image.width=250
      image.height=250
      image.onload = function(e){
        $("#img1").append(image)

        $('#bag').css('background-image', 'http://localhost:3000/home/image1');
      }


      var image1 = new Image();
      image1.src = 'https://hidden-badlands-20774.herokuapp.com/image2';
      image1.width=250
      image1.height=250
      image1.onload = function(e){
        $("#img1").append(image1)
      }

    });

  }
  information:string=''


  ngOnInit(){

    //noinspection TypeScriptUnresolvedFunction
    this.homeService.getHome()
      .subscribe(stats=>this.information=stats.text)

  }




}
