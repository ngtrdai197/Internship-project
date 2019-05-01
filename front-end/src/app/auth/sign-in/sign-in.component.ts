import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.onSetTitle();
  }

  onSetTitle() {
    this.title.setTitle('Đăng nhập tài khoản');
  }
}
