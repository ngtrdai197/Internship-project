import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.onSetTitle();
  }

  onSetTitle() {
    this.title.setTitle('Đăng ký tài khoản');
  }

}
