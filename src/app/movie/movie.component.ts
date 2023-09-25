import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  // movieImage1:string="https://musicart.xboxlive.com/7/d70e5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
  // movieImage2:string="https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_.jpg"
  // movieImage3:string="https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg"
  // movieImage4:string="https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg"

  // watchProperty:boolean=false; //if watchProperty is true button disabled else enabled =false.
  // movieDescription="Spider-Man: for from Home is a 2019 American superhero film based on the marvel comics character spider-man..."
  imagePath:string="http://image.tmdb.org/t/p/w500"
allMovies:any[]=[]
allData:any[]=[];

lang :string='en-US';

showMoviesDetails : boolean = false;

constructor(private movieServ:MoviesService){}

ngOnInit():void {
  this.movieServ.getAllMovies(this.lang).subscribe({next:(response) =>{
    this.allMovies= response.results
    this.allData=this.allMovies
  }});

}

toggleDetails(movieId:number){
  for(const item of this.allMovies){

    if(item.id ==movieId){

    item.toggleDescription = !item.toggleDescription;
    }
  }
this.showMoviesDetails = !this.showMoviesDetails;
}

private searchval : string =''
// search: string =''

  set searchValue(value : string){
    this.searchval = value;
    this.searchallMovies(value);
  }

// old method for searching:

  // searchallMovies(movieTitle : string){
  //   if(movieTitle==''){
  //     this.allMovies=this.allData;
  //   }else{
  //     this.allMovies = this.allMovies.filter((movie)=>{
  //       if(movie.title.toLocaleLowerCase().includes(movieTitle.toLocaleLowerCase()) ){
  //         return movie;
  //       }
  //     })
  //   }

  //   console.log(this.allMovies);

  // }

// new method for searching:

searchallMovies(movieTitle : string){
  this.movieServ.searchAllMovie(movieTitle).subscribe({
    next : (response)=>{
      this.allMovies =response.results
      this.allData = this.allMovies
    }
  })
}


  // to change Language button
  changeLanguage(){
    this.lang = this.lang =='en-US' ? 'ar-SA':'en-US';
    this.movieServ.getAllMovies(this.lang).subscribe({next:(response) =>{
      this.allMovies= response.results
      this.allData=this.allMovies
    }})
  }

  // showDetails(){
  //   alert(this.movieDescription)
  // }
}
