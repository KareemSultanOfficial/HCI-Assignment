import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  username: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  users = new BehaviorSubject<User[]>([]);

  exists(username: string): boolean {
    return this.users.value.some(u => u.username === username);
  }

  add(user: User): void {
    this.users.next([...this.users.value, user]);
  }

  remove(username: string): void {
    this.users.next(this.users.value.filter(u => u.username !== username));
  }
}
