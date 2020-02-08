import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  userName: string;
  constructor(private router: Router, private userService: UserService) {}

  clickButton() {
    alert('ボタンが押されました');
  }

  resisterName() {
    if (this.userName === undefined) {
      alert('ユーザ名を入力してください。');
    } else {
      console.log(this.userName);
      this.userService.userName = this.userName;
      this.userName = '';
      this.router.navigate(['/chat']);
    }
  }

  ngOnInit() {}
}
