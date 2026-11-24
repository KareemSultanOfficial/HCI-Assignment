import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  constructor(public userService: UserService) {}

  delete(username: string) {
    this.userService.remove(username);
  }
}


