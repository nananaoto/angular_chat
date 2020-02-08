import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {
  chat = '';
  chatList: string[] = [];
  items: Observable<any>;
  @Input() dataFromParent: string;

  constructor(
    private router: Router,
    private db: AngularFireDatabase,
    private userService: UserService
  ) {
    console.log(this.userService.userName);
  }

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
      this.chat = '';
    }
  }

  ngOnInit() {}
}
