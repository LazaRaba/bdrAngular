import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  currentParent: any;

  constructor(private token: TokenStorageService){}

  ngOnInit(): void {
    this.currentParent = this.token.getUser();
  }
}
