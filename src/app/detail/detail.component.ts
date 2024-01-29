import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

export interface Stats {
  hp: number,
  attack: number,
  defense: number,
  specialAttack: number,
  specialDefense: number,
  speed: number
}

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit{

  id: number = 0;
  name: string = '';
  types: any[] = [];
  
  stats: Stats | undefined ;

  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => { 
      this.id = params['id'];
    });

    this.getDetail(this.id);
  }

  getImage(pokemonIndex: number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
  }

  getDetail(id: number) {
    this.auth.getDetail(id).subscribe((data: any) => {
      data.types.forEach((element: any) => {
        this.types.push(element.type.name);
      });
      this.stats = {
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        specialAttack: data.stats[3].base_stat,
        specialDefense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat
      }
      this.name = data.name;
    });
  }

}
