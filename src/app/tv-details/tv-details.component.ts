import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvshowsService } from '../tvshows.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
  imagePath:string="http://image.tmdb.org/t/p/w500"

  selectedtv:any;

  constructor(private route: ActivatedRoute, private tvServ: TvshowsService) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.tvServ.getTvById(id).subscribe({next:(response)=>{
      this.selectedtv = response;
    }})
  }
}
