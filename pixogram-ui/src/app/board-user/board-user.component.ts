import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css'],
})
export class BoardUserComponent implements OnInit {
  content = '';
  currentUser: any;
  constructor(private userService: UserService,private token: TokenStorageService) { }

  ngOnInit() {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
        this.currentUser = this.token.getUser();
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
