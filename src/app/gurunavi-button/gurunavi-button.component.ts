import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gurunavi-button',
  templateUrl: './gurunavi-button.component.html',
  styleUrls: ['./gurunavi-button.component.css']
})
export class GurunaviButtonComponent implements OnInit {
  private host: string =
    'https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=c9e8a4c57af35ca81e1265be42438895&freeword=九段下';

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getGurunavi() {
    this.http
      .get<any>(this.host)
      .toPromise()
      .then(res => {
        console.log(res);
      });
  }
}
