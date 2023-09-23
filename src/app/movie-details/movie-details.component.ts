import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  imagePath:string="http://image.tmdb.org/t/p/w500"
  allMovies:any[]=[
    {
       "adult":false,
       "backdrop_path":"/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg",
       "genre_ids":[
          27,
          53
       ],
       "id":1008042,
       "original_language":"en",
       "original_title":"Talk to Me",
       "overview":"When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
       "popularity":2292.177,
       "poster_path":"/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
       "release_date":"2023-07-26",
       "title":"Talk to Me",
       "video":false,
       "vote_average":7.3,
       "vote_count":686
    },
    {
       "adult":false,
       "backdrop_path":"/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
       "genre_ids":[
          35,
          12,
          14
       ],
       "id":346698,
       "original_language":"en",
       "original_title":"Barbie",
       "overview":"Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
       "popularity":1899.184,
       "poster_path":"/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
       "release_date":"2023-07-19",
       "title":"Barbie",
       "video":false,
       "vote_average":7.3,
       "vote_count":4757
    },
    {
       "adult":false,
       "backdrop_path":"/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
       "genre_ids":[
          28,
          80,
          53
       ],
       "id":385687,
       "original_language":"en",
       "original_title":"Fast X",
       "overview":"Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
       "popularity":1973.052,
       "poster_path":"/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
       "release_date":"2023-05-17",
       "title":"Fast X",
       "video":false,
       "vote_average":7.3,
       "vote_count":3749
    },
    {
       "adult":false,
       "backdrop_path":"/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg",
       "genre_ids":[
          28,
          878,
          27
       ],
       "id":615656,
       "original_language":"en",
       "original_title":"Meg 2: The Trench",
       "overview":"An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
       "popularity":1804.581,
       "poster_path":"/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
       "release_date":"2023-08-02",
       "title":"Meg 2: The Trench",
       "video":false,
       "vote_average":7,
       "vote_count":1823
    },
    {
       "adult":false,
       "backdrop_path":"/53z2fXEKfnNg2uSOPss2unPBGX1.jpg",
       "genre_ids":[
          27,
          9648,
          53
       ],
       "id":968051,
       "original_language":"en",
       "original_title":"The Nun II",
       "overview":"In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
       "popularity":1296.77,
       "poster_path":"/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
       "release_date":"2023-09-06",
       "title":"The Nun II",
       "video":false,
       "vote_average":6.7,
       "vote_count":229
    },
    {
       "adult":false,
       "backdrop_path":"/c6Splshb8lb2Q9OvUfhpqXl7uP0.jpg",
       "genre_ids":[
          28,
          53
       ],
       "id":717930,
       "original_language":"en",
       "original_title":"Kandahar",
       "overview":"After his mission is exposed, an undercover CIA operative stuck deep in hostile territory in Afghanistan must fight his way out, alongside his Afghan translator, to an extraction point in Kandahar, all whilst avoiding elite enemy forces and foreign spies tasked with hunting them down.",
       "popularity":1206.966,
       "poster_path":"/lCanGgsqF4xD2WA5NF8PWeT3IXd.jpg",
       "release_date":"2023-05-25",
       "title":"Kandahar",
       "video":false,
       "vote_average":6.8,
       "vote_count":507
    },
    {
       "adult":false,
       "backdrop_path":"/4fLZUr1e65hKPPVw0R3PmKFKxj1.jpg",
       "genre_ids":[
          16,
          35,
          10751,
          14,
          10749
       ],
       "id":976573,
       "original_language":"en",
       "original_title":"Elemental",
       "overview":"In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
       "popularity":953.333,
       "poster_path":"/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
       "release_date":"2023-06-14",
       "title":"Elemental",
       "video":false,
       "vote_average":7.8,
       "vote_count":2182
    },
    {
       "adult":false,
       "backdrop_path":"/H6j5smdpRqP9a8UnhWp6zfl0SC.jpg",
       "genre_ids":[
          28,
          878,
          12
       ],
       "id":565770,
       "original_language":"en",
       "original_title":"Blue Beetle",
       "overview":"Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
       "popularity":1007.105,
       "poster_path":"/vNfL4DYnonltukBrrgMmw94zMYL.jpg",
       "release_date":"2023-08-16",
       "title":"Blue Beetle",
       "video":false,
       "vote_average":7.2,
       "vote_count":541
    },
    {
       "adult":false,
       "backdrop_path":"/9m161GawbY3cWxe6txd1NOHTjd0.jpg",
       "genre_ids":[
          878,
          12,
          28,
          14
       ],
       "id":335977,
       "original_language":"en",
       "original_title":"Indiana Jones and the Dial of Destiny",
       "overview":"Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
       "popularity":804.982,
       "poster_path":"/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
       "release_date":"2023-06-28",
       "title":"Indiana Jones and the Dial of Destiny",
       "video":false,
       "vote_average":6.7,
       "vote_count":1650
    },
    {
       "adult":false,
       "backdrop_path":"/jkKVLzLWjSvTnc84VzeljhSy6j8.jpg",
       "genre_ids":[
          10749,
          18
       ],
       "id":820525,
       "original_language":"en",
       "original_title":"After Everything",
       "overview":"Besieged by writer’s block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past – and to find himself. Hoping to win back Tessa, he realizes he needs to change his ways before he can make the ultimate commitment.",
       "popularity":650.272,
       "poster_path":"/gZLGCibvFY4zmt8sWUZcbBTHRtk.jpg",
       "release_date":"2023-09-13",
       "title":"After Everything",
       "video":false,
       "vote_average":6.4,
       "vote_count":27
    },
    {
       "adult":false,
       "backdrop_path":"/waBWlJlMpyFb7STkFHfFvJKgwww.jpg",
       "genre_ids":[
          28,
          18
       ],
       "id":678512,
       "original_language":"en",
       "original_title":"Sound of Freedom",
       "overview":"The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
       "popularity":668.456,
       "poster_path":"/kSf9svfL2WrKeuK8W08xeR5lTn8.jpg",
       "release_date":"2023-07-03",
       "title":"Sound of Freedom",
       "video":false,
       "vote_average":8,
       "vote_count":458
    },
    {
       "adult":false,
       "backdrop_path":"/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg",
       "genre_ids":[
          28,
          9648,
          53,
          80
       ],
       "id":762430,
       "original_language":"en",
       "original_title":"Retribution",
       "overview":"When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks. With his kids trapped in the back seat and a bomb that will explode if they get out of the car, a normal commute becomes a twisted game of life or death as Matt follows the stranger's increasingly dangerous instructions in a race against time to save his family.",
       "popularity":702.724,
       "poster_path":"/oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg",
       "release_date":"2023-08-23",
       "title":"Retribution",
       "video":false,
       "vote_average":6.6,
       "vote_count":130
    },
    {
       "adult":false,
       "backdrop_path":"/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
       "genre_ids":[
          28,
          12,
          878
       ],
       "id":667538,
       "original_language":"en",
       "original_title":"Transformers: Rise of the Beasts",
       "overview":"When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
       "popularity":650.789,
       "poster_path":"/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
       "release_date":"2023-06-06",
       "title":"Transformers: Rise of the Beasts",
       "video":false,
       "vote_average":7.5,
       "vote_count":3189
    },
    {
       "adult":false,
       "backdrop_path":"/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg",
       "genre_ids":[
          16,
          35,
          28
       ],
       "id":614930,
       "original_language":"en",
       "original_title":"Teenage Mutant Ninja Turtles: Mutant Mayhem",
       "overview":"After years of being sheltered from the human world, the Turtle brothers set out to win the hearts of New Yorkers and be accepted as normal teenagers through heroic acts. Their new friend April O'Neil helps them take on a mysterious crime syndicate, but they soon get in over their heads when an army of mutants is unleashed upon them.",
       "popularity":644.874,
       "poster_path":"/oupWWrVuCgNEa5GcjdkpjCYbx2X.jpg",
       "release_date":"2023-07-31",
       "title":"Teenage Mutant Ninja Turtles: Mutant Mayhem",
       "video":false,
       "vote_average":7.3,
       "vote_count":541
    },
    {
       "adult":false,
       "backdrop_path":"/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
       "genre_ids":[
          28,
          12,
          878
       ],
       "id":298618,
       "original_language":"en",
       "original_title":"The Flash",
       "overview":"When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
       "popularity":561.181,
       "poster_path":"/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
       "release_date":"2023-06-13",
       "title":"The Flash",
       "video":false,
       "vote_average":6.9,
       "vote_count":2873
    },
    {
       "adult":false,
       "backdrop_path":"/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
       "genre_ids":[
          16,
          28,
          12
       ],
       "id":569094,
       "original_language":"en",
       "original_title":"Spider-Man: Across the Spider-Verse",
       "overview":"After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
       "popularity":842.076,
       "poster_path":"/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
       "release_date":"2023-05-31",
       "title":"Spider-Man: Across the Spider-Verse",
       "video":false,
       "vote_average":8.5,
       "vote_count":4261
    },
    {
       "adult":false,
       "backdrop_path":"/3mYCjwll5RG342Dz1f8HcnT8tV.jpg",
       "genre_ids":[
          28,
          80
       ],
       "id":606403,
       "original_language":"ko",
       "original_title":"특송",
       "overview":"Eun-ha, who is a normal junkyard employee, secretly works as a delivery clerk that deals with unusual delivery requests. One day, Eun-ha heads to Seoul to pick up a client who is involved in a gambling crime that wants to flee overseas. However, Eun-ha meets the client's young son at the pick-up point, instead of the client himself. Kyeong-pil, a current police officer who is actually masterminding the whole gambling crime, chases after the missing child who has the security key to the bank account that holds 30 million dollars.",
       "popularity":525.582,
       "poster_path":"/fYT7JB4sU1XXeawEXOdQ3TtkFB2.jpg",
       "release_date":"2022-01-12",
       "title":"Special Delivery",
       "video":false,
       "vote_average":6.9,
       "vote_count":105
    },
    {
       "adult":false,
       "backdrop_path":"/rV56FkcHkzHJcBOOqoCeSDnoBff.jpg",
       "genre_ids":[
          28,
          18
       ],
       "id":990140,
       "original_language":"cn",
       "original_title":"天龍八部之喬峰傳",
       "overview":"Qiao Feng is the respected leader of a roving band of martial artists. After he is wrongfully accused of murder and subsequently exiled, Qiao Feng goes on the run in search of answers about his own mysterious origin story—and the unknown enemies working to destroy him from the shadows.",
       "popularity":522.83,
       "poster_path":"/jGKCpt3zzbGZbgoza6HCvecqElM.jpg",
       "release_date":"2023-01-16",
       "title":"Sakra",
       "video":false,
       "vote_average":6.6,
       "vote_count":86
    },
    {
       "adult":false,
       "backdrop_path":"/1HzL603WOer58xtnrRYdSIL5K04.jpg",
       "genre_ids":[
          35,
          12
       ],
       "id":912908,
       "original_language":"en",
       "original_title":"Strays",
       "overview":"When Reggie is abandoned on the mean city streets by his lowlife owner, Doug, Reggie is certain that his beloved owner would never leave him on purpose. But once Reggie falls in with Bug, a fast-talking, foul-mouthed stray who loves his freedom and believes that owners are for suckers, Reggie finally realizes he was in a toxic relationship and begins to see Doug for the heartless sleazeball that he is.",
       "popularity":479.903,
       "poster_path":"/n1hqbSCtyBAxaXEl1Dj3ipXJAJG.jpg",
       "release_date":"2023-08-17",
       "title":"Strays",
       "video":false,
       "vote_average":7.5,
       "vote_count":323
    },
    {
       "adult":false,
       "backdrop_path":"/4wVFtesa5YEWuAUHRcxoCN1Y1uN.jpg",
       "genre_ids":[
          28,
          53
       ],
       "id":1085218,
       "original_language":"da",
       "original_title":"Underverden 2",
       "overview":"Seven years ago, Zaid went to war against the Copenhagen underworld to avenge his dead brother. His identity as a respected doctor of cardiology and life as a family man is but a fading dream, and in prison Zaid suffers the loss of his son Noah, whom he barely knows. When a police agent approaches Zaid and offers him a deal to be released in exchange for infiltrating the Copenhagen underworld, he sees his chance to reclaim the remnants of the family life he left behind. But everything has a price, and Zaid realizes that he has now seriously endangered his son's life. After all, once you become part of the underworld, is there any way out?",
       "popularity":524.476,
       "poster_path":"/c8B4DsVcFVDLVmbpHMHU3RjLNAV.jpg",
       "release_date":"2023-04-13",
       "title":"Darkland: The Return",
       "video":false,
       "vote_average":6.2,
       "vote_count":59
    }

  ];
  selectedmovie={
  "adult":false,
  "backdrop_path":"/53z2fXEKfnNg2uSOPss2unPBGX1.jpg",
  "genre_ids":[
     27,
     9648,
     53
  ],
  "id":968051,
  "original_language":"en",
  "original_title":"The Nun II",
  "overview":"In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
  "popularity":1296.77,
  "poster_path":"/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
  "release_date":"2023-09-06",
  "title":"The Nun II",
  "video":false,
  "vote_average":6.7,
  "vote_count":229
}
constructor(private route:ActivatedRoute){

}
ngOnInit(): void {
  let id = parseInt(this.route.snapshot.paramMap.get('id')!);
  console.log(id);
  this.selectedmovie = this.allMovies.find((movie)=>movie.id ==id)
}
}
