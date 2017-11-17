import {Injectable} from '@angular/core'
import {Http,RequestOptions,Headers} from '@angular/http'




const baseUrl='http://localhost:3000/'

@Injectable()
export class InformationService{
  //noinspection JSDeprecatedSymbols
  constructor(
    private http:Http,
  ){}

  giveInformation(takeInformationFromForm){


    let postInfo=JSON.stringify(takeInformationFromForm)

    console.log('vutre')

    const requestOptions=this.getRequestOptions()



    return this.http
      .post('http://localhost:3000/giveInformation',postInfo,requestOptions)
      .map(res=>res.json())
  }

  private getRequestOptions(){
    const headers=new Headers();


      headers.append('Content-Type','application/json')




    const requestOptions=new RequestOptions({
      headers:headers
    })

    return requestOptions;
  }









}
