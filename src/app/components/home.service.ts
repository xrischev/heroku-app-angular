import {Injectable} from '@angular/core'
import {Http,RequestOptions,Headers} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import { ResponseContentType } from '@angular/http';

import 'rxjs/add/operator/map'



const baseUrl='http://localhost:3000/'

@Injectable()
export class HomeService{
  //noinspection JSDeprecatedSymbols
  constructor(
    private http:Http,
  ){}

  getHome(){
    return this.http
      .get('https://hidden-badlands-20774.herokuapp.com/')
      .map(res=>res.json())
  }







}
