import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  content: string | undefined;

  constructor(private userService: UserService){}

  ngOnInit(){
    this.userService.getAdminBoard().subscribe({
      next: (data)=>{
        this.content = data;
      },error:(error:any)=>{
        console.log("connect:", error);

      }
    }
    )
  }
}
