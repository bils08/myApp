import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule, 
    MatGridListModule, 
    MatCardModule,
    MatButtonModule,
    RouterOutlet
  ],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss'
})
export class ListsComponent implements OnInit{

  constructor(private auth: AuthService, private router: Router, private _activatedRoute: ActivatedRoute) {}
  lists: any[] | undefined = [];

  ngOnInit(): void {
    this.auth.getList().subscribe((data: any) => {
      data.results.forEach((element:any) => {
        let id =  element.url.split('/')[6];
        let name = element.name;
        this.lists?.push({id,name})
      });
    }); 
  }

  getImage(pokemonIndex: number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
  }

  async gotToDetail(id: number): Promise<void> {
    await this.router.navigate([id], { relativeTo: this._activatedRoute })
  }

}
