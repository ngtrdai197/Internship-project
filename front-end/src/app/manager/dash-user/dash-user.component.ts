import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from 'src/@core/services/user/user.service';
import { IUser } from 'src/@core/interface/IUser.interface';

@Component({
  selector: 'app-dash-user',
  templateUrl: './dash-user.component.html',
  styleUrls: ['./dash-user.component.scss']
})
export class DashUserComponent implements OnInit {

  users: IUser[] = [];
  isToggle: boolean = false;
  constructor(private title: Title, private userService: UserService) { }

  ngOnInit() {
    this.onSetTitle();
    this.onFetchUsers();
  }

  onFetchUsers() {
    this.userService.onFetchUsers().subscribe((data: IUser[]) => {
      this.users = data;
      console.log(this.users);

    })
  }
  onCheckedUser(user) {
    if(this.users){
      this.isToggle = true;
    }else{
      this.isToggle=false;
    }
  }
  onSetTitle() {
    this.title.setTitle('Quản lý người dùng');
  }
}
