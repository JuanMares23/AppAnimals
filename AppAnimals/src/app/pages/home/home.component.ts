import { Component, OnInit } from '@angular/core';
// import User from '../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = [
    {
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Perro_tomando_el_sol%2C_Ipiales%2C_Colombia%2C_2015-07-21%2C_DD_06.JPG/1024px-Perro_tomando_el_sol%2C_Ipiales%2C_Colombia%2C_2015-07-21%2C_DD_06.JPG',
      user: {
        img: 'https://avatars.githubusercontent.com/u/47485144?v=4',
        username: 'Uriel Sánchez',
        date: '2h',
        place: 'Culiacán, Sinaloa',
      },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugiat, rerum ex quod obcaecati quasi quibusdam assumenda delectus iste dolore numquam eligendi tempore, quidem porro animi repudiandae nam eius. Earum aliquam excepturi id unde?',
      vet: {
        img:
          'https://micarrerauniversitaria.com/wp-content/uploads/2018/03/veterinario-1.gif',
        vetname: 'Veterinaria Pamela Anderson',
        diagnosis: 'Resfriado',
        simptoms: 'Pecho hinchado, debilidad en piernas',
        medicine: 'Jarabe para la tos',
        price: 200,
      },
      caseId: '#abc123',
    },
    {
      img:
        'https://static.nationalgeographic.es/files/styles/image_3200/public/01-stray-dogs-nationalgeographic_1927666.jpg?w=1600&h=1067',
      user: {
        img: 'https://avatars.githubusercontent.com/u/47485144?v=4',
        username: 'Uriel Sánchez',
        date: '2h',
        place: 'Culiacán, Sinaloa',
      },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugiat, rerum ex quod obcaecati quasi quibusdam assumenda delectus iste dolore numquam eligendi tempore, quidem porro animi repudiandae nam eius. Earum aliquam excepturi id unde?',
      caseId: '#abc456',
    },
    {
      img: 'https://pbs.twimg.com/media/EZJRKvJXsAE4wXb.jpg:large',
      user: {
        img: 'https://avatars.githubusercontent.com/u/47485144?v=4',
        username: 'Uriel Sánchez',
        date: '2h',
        place: 'Culiacán, Sinaloa',
      },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugiat, rerum ex quod obcaecati quasi quibusdam assumenda delectus iste dolore numquam eligendi tempore, quidem porro animi repudiandae nam eius. Earum aliquam excepturi id unde?',
      vet: {
        img:
          'https://micarrerauniversitaria.com/wp-content/uploads/2018/03/veterinario-1.gif',
        vetname: 'Veterinaria Pamela Anderson',
        diagnosis: 'Resfriado',
        simptoms: 'Pecho hinchado, debilidad en piernas',
        medicine: 'Jarabe para la tos',
        price: 500,
      },
      caseId: '#abc789',
    },
  ];

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
    //   photos: [""],
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
