import { Component, OnInit, Sanitizer } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  ScrollToService,
  ScrollToConfigOptions
} from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chat = '';
  chatList: string[] = [];
  items: Observable<any>;
  safeMsg: SafeHtml;
  step = 0;
  area: string;
  freeword: string;

  private host: string =
    'https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=c9e8a4c57af35ca81e1265be42438895';

  constructor(
    private router: Router,
    private db: AngularFireDatabase,
    private userService: UserService,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private _scrollToService: ScrollToService
  ) {
    console.log(this.userService.userName);
  }

  /*
  getGurunavi() {
    const freeword = this.chat;
    if (this.userService.userName === undefined) {
      alert('ユーザ名が不明です。もう一度入力してください。');
      this.router.navigate(['/top']);
    } else {
      this.http
        .get<any>(this.host + '&freeword=' + freeword)
        .toPromise()
        .then(res => {
          this.db.list('items').push({
            name: 'gurunavi-api',
            comment:
              freeword + 'のおすすめ店です。\n「' + res.rest[0].name + '」',
            initial: 'ぐ'
          });
          const shopUrl: string =
            '<a href=' + res.rest[0].url + '>' + res.rest[0].url + '</a>';
          this.safeMsg = this.sanitizer.bypassSecurityTrustHtml(shopUrl);
          this.db.list('items').push({
            name: 'gurunavi-api',
            comment: this.safeMsg,
            initial: 'ぐ'
          });
          console.log(res);
          console.log(shopUrl);
        });
      this.chat = '';
    }
  }
*/

  addItems() {
    if (this.userService.userName === undefined) {
      alert('ユーザ名が不明です。もう一度入力してください。');
      this.router.navigate(['/top']);
    } else {
      console.log(this.userService.userName[0]);
      this.db.list('items').push({
        name: this.userService.userName,
        comment: this.chat,
        initial: this.userService.userName[0]
      });
      if (this.chat === 'ぐるなび') {
        this.gurunaviButton();
      } else {
        if (this.step !== 0) {
          this.gurunavi();
        }
      }
      this.chat = '';
    }
    this.triggerScrollTo();
  }

  /*
  generateColor(className: string) {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    for (let count = color.length; count < 6; count++) {
      color = '0' + color;
    }
    let randomColor = '#' + color;
    let target = document.getElementById(className);
    target.style.color = randomColor;
  }
*/

  is_url(comment) {
    if (comment.substr(0, 8) === 'https://') {
      return true;
    }
  }

  gurunaviButton() {
    this.step = 0;
    this.gurunavi();
  }

  gurunavi() {
    switch (this.step) {
      case 0:
        this.gurunavi0();
        break;
      case 1:
        this.gurunavi1();
        break;
      case 2:
        this.gurunavi2();
        break;

      default:
    }
    if (this.step < 2) {
      this.step += 1;
    } else {
      this.step = 0;
    }
  }

  gurunavi0() {
    this.gurunaviComment('お店の場所を指定してください');
  }
  gurunavi1() {
    this.area = this.chat;
    this.gurunaviComment('食べたいジャンルを指定してください');
  }
  gurunavi2() {
    this.freeword = this.chat;
    this.shopSelect();
  }

  gurunaviComment(str: string) {
    this.db.list('items').push({
      name: 'gurunavi-api',
      comment: str,
      initial: 'ぐ'
    });
  }

  shopSelect() {
    this.http
      .get<any>(
        this.host + '&freeword=' + this.area + '&freeword=' + this.freeword
      )
      .toPromise()
      .then(res => {
        this.db.list('items').push({
          name: 'gurunavi-api',
          comment:
            this.area +
            '、' +
            this.freeword +
            'のおすすめ店です。\n「' +
            res.rest[0].name +
            '」',
          initial: 'ぐ',
          img: res.rest[0].image_url.shop_image1
        });
        console.log(res.rest[0]);
        this.db.list('items').push({
          name: 'gurunavi-api',
          comment: res.rest[0].url,
          initial: 'ぐ'
        });
      });
  }

  public triggerScrollTo() {
    const config: ScrollToConfigOptions = {
      target: 'destination'
    };
    this._scrollToService.scrollTo(config);
  }

  ngOnInit() {
    this.items = this.db.list('items').valueChanges();
  }
}
