import { Component, OnInit } from '@angular/core';
// import User from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) {
    // console.log("constructor jiji")
    // let user: User = {
    //   name: "Lu",
    //   mail: "lucia.sanchezman@hotmail.com",
    //   phone: "6679960661",
    //   role: "admin",
    //   permissions: {
    //     donate: true,
    //     publish_post: true,
    //     publish_case: true,
    //     adopt: true,
    //     search_user: true,
    //     search_vet: true,
    //     evaluate_vet: true,
    //     evaluate_user: true,
    //     view_post: true,
    //     view_case: true
    //   },
    //   photo: "",
    //   noCases: 0,
    //   noPosts: 0,
    //   noAdoptions: 0,
    //   creation_date: new Date().getTime(),
    //   status: true,
    //   grade: 5,

    // }
    // userService.addUser(user).then(() => console.log("added")).catch((e) => console.log("error adding", e))
  }

  ngOnInit(): void {
  }

}
