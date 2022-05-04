import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'Helniv-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = {
    id: "0",
    nome: "",
    login: "",
    password: "",
    email: "",
    ativo: ""
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createUser(): void {
    this.userService.createUser(this.user).subscribe(() => {
      this.userService.showMessage("Usuário criado com sucesso!")
      this.router.navigate(['/users'])
    });
  }

}
