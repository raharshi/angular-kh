import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users!: any[];
  userId!: any;
  user!: any;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route);
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId != null && this.userId != undefined)
      this.userService.getUser(this.userId).subscribe(data => {
        console.log("User Data: " + JSON.stringify(data));
        this.user = data;
      })
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

}
