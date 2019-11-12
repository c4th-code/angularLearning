import { Component, OnInit } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User = {
    name :      'Doe',
    firstName : 'John',
    age :       25,
    quote :     '',
    photo :     'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  isShow = false;

  constructor() { }

  ngOnInit() {
  }

  hideAge() {
    this.isShow = !this.isShow;
  }
}
