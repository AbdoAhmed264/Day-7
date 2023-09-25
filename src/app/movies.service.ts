import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  api :string= '83d70542ae5f92ee4296318fda4bc93b'
  allMovies:any[]=[]

  constructor(private http:HttpClient) { }

  getAllMovies(language:string='en-US') :Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.api}&language=${language}`
      );

  }
  getMovieById(movieId:number):Observable<any> {
    //new method by API
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.api}`)

    // Old method
    // return this.allMovies.find((movie)=>movie.id ==movieId)
  }
// search all movies
searchAllMovie(moviename:string) :Observable<any>{
  if(moviename==''){
    return this.getAllMovies();
  }else{
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.api}&query=${moviename}`)
  }

}
}
