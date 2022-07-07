import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: any[];
  today: Date = new Date();
  salary: number = 10000.123656;
  variable: number = 0.09;
  searchTerm!: string;
  test: string = "as dfg"
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  getToUser(user: any) {
    console.log(JSON.stringify(user));
    this.router.navigate(['/user', user.id]);
  }
}
