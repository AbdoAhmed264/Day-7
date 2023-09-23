import { Component } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {

  imagePath:string="http://image.tmdb.org/t/p/w500"

  allTvs:any[]=[
    {
       "backdrop_path":"/jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg",
       "first_air_date":"1952-12-26",
       "genre_ids":[
          10763
       ],
       "id":94722,
       "name":"Tagesschau",
       "origin_country":[
          "DE"
       ],
       "original_language":"de",
       "original_name":"Tagesschau",
       "overview":"German daily news program, the oldest still existing program on German television.",
       "popularity":3352.419,
       "poster_path":"/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg",
       "vote_average":7.5,
       "vote_count":144
    },
    {
       "backdrop_path":"/yii7eIlaw1MRMfa7FTA6mW8hBUQ.jpg",
       "first_air_date":"2023-08-14",
       "genre_ids":[
          35,
          10766
       ],
       "id":213026,
       "name":"Fuzuê",
       "origin_country":[
          "BR"
       ],
       "original_language":"pt",
       "original_name":"Fuzuê",
       "overview":"",
       "popularity":3333.531,
       "poster_path":"/zNNFg8z3z7uT817n6M0kHRcYwq1.jpg",
       "vote_average":6.5,
       "vote_count":10
    },
    {
       "backdrop_path":"/zDUZKdCMESNbylWGybN4FMaUckG.jpg",
       "first_air_date":"2022-11-28",
       "genre_ids":[
          18
       ],
       "id":215315,
       "name":"Rabb Se Hai Dua",
       "origin_country":[
          "IN"
       ],
       "original_language":"hi",
       "original_name":"रब्ब से है दुआ",
       "overview":"Dua and her husband are a perfect married couple in the eyes of their family. However, Dua’s life turns upside down when her husband seeks her permission to marry another woman.",
       "popularity":3325.072,
       "poster_path":"/6ikbefd7VeopbBuGgioYMNU5bQj.jpg",
       "vote_average":6.7,
       "vote_count":89
    },
    {
       "backdrop_path":"/3n2TjKw3HrwDqgVgcynvantOfS3.jpg",
       "first_air_date":"2023-01-04",
       "genre_ids":[
          18,
          10751
       ],
       "id":215103,
       "name":"Teri Meri Doriyaann",
       "origin_country":[
          "IN"
       ],
       "original_language":"hi",
       "original_name":"तेरी मेरी डोरियाँ",
       "overview":"It’s hate at first sight for Sahiba and Angad! But destined to be together, their lives get intertwined by a marriage alliance, and a love-hate story ensues.",
       "popularity":3120.413,
       "poster_path":"/4BHDmYiuSnNL3nqKIOzLJKYX4AN.jpg",
       "vote_average":7.2,
       "vote_count":109
    },
    {
       "backdrop_path":"/1Xm0WqoT0DjZm5JdG2V6YFabrOz.jpg",
       "first_air_date":"2023-02-13",
       "genre_ids":[
          10759,
          35,
          18
       ],
       "id":215803,
       "name":"Batang Quiapo",
       "origin_country":[
          "PH"
       ],
       "original_language":"tl",
       "original_name":"Quiapo Kid",
       "overview":"A young man rises to be one of the biggest outlaws in the neighborhood while he navigates his way in life to survive in Quiapo. Hoping to earn the affection of his parents, his feat draws him closer to the truth about his identity.",
       "popularity":3092.465,
       "poster_path":"/9McqS8mgMf5NJCAKZIY6J1oOl8y.jpg",
       "vote_average":7.1,
       "vote_count":96
    },
    {
       "backdrop_path":"/1Vj73YrMj4OLBppgZdWXoGZlsGI.jpg",
       "first_air_date":"2022-12-05",
       "genre_ids":[
          18,
          10751,
          10766
       ],
       "id":215902,
       "name":"Katha Ankahee",
       "origin_country":[
          "IN"
       ],
       "original_language":"hi",
       "original_name":"कथा अनकही",
       "overview":"Katha, a single parent, is in need of funds for her son's medical treatment. She comes across Viaan, who offers help but his conditions put her in an awkward situation.",
       "popularity":3072.702,
       "poster_path":"/uhXU0SMPMlemKGHmwbldM60qqmW.jpg",
       "vote_average":7.6,
       "vote_count":100
    },
    {
       "backdrop_path":"/5MkBAawsj7O9zitVtzMXagyrIBw.jpg",
       "first_air_date":"2023-01-30",
       "genre_ids":[
          18,
          10766
       ],
       "id":217216,
       "name":"Flor Sem Tempo",
       "origin_country":[
          "PT"
       ],
       "original_language":"pt",
       "original_name":"Flor Sem Tempo",
       "overview":"",
       "popularity":2954.732,
       "poster_path":"/bclnfDXvx7UydFSk83B258vRRvI.jpg",
       "vote_average":7.2,
       "vote_count":39
    },
    {
       "backdrop_path":"/gMDRoKAN4b4oPgkOcBoV4RW0LsD.jpg",
       "first_air_date":"2022-05-02",
       "genre_ids":[
          18
       ],
       "id":216289,
       "name":"Pyar Ka Pehla Naam: Radha Mohan",
       "origin_country":[
          "IN"
       ],
       "original_language":"hi",
       "original_name":"Pyar Ka Pehla Naam: Radha Mohan",
       "overview":"In modern-day Vrindavan, Mohan, a charming flute player, loses his spark post a tragedy. Radha, who admires him since her childhood days, decides to remind him of his true love, Lord Krishna.",
       "popularity":2997.348,
       "poster_path":"/cGUF4aT3GCmCy3f84KKIpWS3kty.jpg",
       "vote_average":6,
       "vote_count":16
    },
    {
       "backdrop_path":"/9TXcHOeCsM8W3ZKKIKjdYUsRSeq.jpg",
       "first_air_date":"2017-07-17",
       "genre_ids":[
          80,
          18
       ],
       "id":72879,
       "name":"Tomorrow is Ours",
       "origin_country":[
          "FR"
       ],
       "original_language":"fr",
       "original_name":"Demain nous appartient",
       "overview":"The story revolves around the people of Sète, France. Their lives are punctuated by family rivalries, romance and scenes from daily life, but also by plots involving police investigations, secrets and betrayals.",
       "popularity":2752.691,
       "poster_path":"/3uU5uJzOX7xe7mn7YKpBM9oiEZO.jpg",
       "vote_average":6.6,
       "vote_count":36
    },
    {
       "backdrop_path":"/yJEFbFax9fb8ePB0rK9UIQoXMG4.jpg",
       "first_air_date":"2023-04-17",
       "genre_ids":[
          18
       ],
       "id":222100,
       "name":"Meant To Be",
       "origin_country":[
          "KR"
       ],
       "original_language":"ko",
       "original_name":"Meant To Be",
       "overview":"The work depicts the lives of two women, Lee Hae In, and Kang Se Na, who fell into different fates as children.",
       "popularity":2538.999,
       "poster_path":"/xdzSO56WueBMW45QHWemV3D6mzJ.jpg",
       "vote_average":7,
       "vote_count":100
    },
    {
       "backdrop_path":"/69Jblm3seQgiPuPQMrJqg9Nxhaz.jpg",
       "first_air_date":"2011-01-10",
       "genre_ids":[
          10763,
          10767
       ],
       "id":101463,
       "name":"Al rojo vivo",
       "origin_country":[
          "ES"
       ],
       "original_language":"es",
       "original_name":"Al rojo vivo",
       "overview":"",
       "popularity":2436.075,
       "poster_path":"/ag6PmoBxkF2s1uY3An618NCEt3g.jpg",
       "vote_average":2.9,
       "vote_count":12
    },
    {
       "backdrop_path":"/2N4LXvTkUwPRkbvyzdmzvtnCHgR.jpg",
       "first_air_date":"2023-07-25",
       "genre_ids":[

       ],
       "id":225660,
       "name":"Pira-Pirasong Paraiso",
       "origin_country":[
          "PH"
       ],
       "original_language":"tl",
       "original_name":"Pira-Pirasong Paraiso",
       "overview":"A con artist takes on the job of pretending to be one of the long-lost sisters of a young and rich woman. As she navigates a world of cunning and lies, she learns about right and wrong, love and family, and spectacular truths about herself.",
       "popularity":2356.41,
       "poster_path":"/gELcO56G9EsUj6LSjaDq8VvI8De.jpg",
       "vote_average":7.4,
       "vote_count":16
    },
    {
       "backdrop_path":"/i4n8ZKmCUaxcGMkPhm12selZiff.jpg",
       "first_air_date":"2023-06-12",
       "genre_ids":[
          18,
          10766
       ],
       "id":226411,
       "name":"Revenge is mine",
       "origin_country":[
          "ES"
       ],
       "original_language":"es",
       "original_name":"Mía es la venganza",
       "overview":"",
       "popularity":2275.523,
       "poster_path":"/wysp5AcY9JpLjje5NunKYw7Mrtc.jpg",
       "vote_average":7.3,
       "vote_count":56
    },
    {
       "backdrop_path":"/ohJTnu93hJ0Uonl86Wn3mOSlWXN.jpg",
       "first_air_date":"2017-02-06",
       "genre_ids":[
          10751,
          35,
          18
       ],
       "id":91759,
       "name":"Come Home Love: Lo and Behold",
       "origin_country":[
          "HK"
       ],
       "original_language":"cn",
       "original_name":"愛·回家之開心速遞",
       "overview":"Hung Sue Gan starting from the bottom, established his own logistics company, which is now running smoothly. His only concern now are his three daughters. His eldest daughter has immigrated overseas. His second daughter Hung Yeuk Shui has reached the marriageable age, but has no hopes for marriage anytime soon. She is constantly bickering with her younger sister Hung Sum Yue, who is an honour student, over trivial matters, causing their father to not know whether to laugh or cry. Hung Sue Yan, Hung Sue Gan's brother, moves in with the family, temporarily ending his life as a nomadic photographer. He joins Hung Yeuk Shui's company and encounters Ko Pak Fei, the director of an online shop. The two appear to be former lovers, making for lots of laughter. Since Hung Sue Yan moved in, a series of strange events have occurred in the family. Upon investigation, the source is traced to Lung Ging Fung, a promising young man who is the son of department store mogul Lung Gam Wai.",
       "popularity":2213.634,
       "poster_path":"/lgD4j9gUGmMckZpWWRJjorWqGVT.jpg",
       "vote_average":4.2,
       "vote_count":19
    },
    {
       "backdrop_path":"/tRB52F0AoLvjxZn1TtgoBc4DXnw.jpg",
       "first_air_date":"2023-07-25",
       "genre_ids":[

       ],
       "id":226742,
       "name":"Nag-aapoy na Damdamin",
       "origin_country":[
          "PH"
       ],
       "original_language":"tl",
       "original_name":"Nag-aapoy na Damdamin",
       "overview":"Two well-established families get embroiled in a complicated struggle rooted in grief, anger, and a passionate desire for revenge. The husbands and wives set their elaborate plans in motion as they fight for their loved ones and their own desires.",
       "popularity":2253.453,
       "poster_path":"/tFKsun3FtW9nxw1J14T9s7Iemm8.jpg",
       "vote_average":1,
       "vote_count":1
    },
    {
       "backdrop_path":"/kdF7ZTktLHVVhAhI90uuzqlZqJI.jpg",
       "first_air_date":"2023-06-06",
       "genre_ids":[
          18
       ],
       "id":228093,
       "name":"Titlie",
       "origin_country":[
          "IN"
       ],
       "original_language":"hi",
       "original_name":"Titlie",
       "overview":"Obsessed by the notion of fairy tale love , Titlie marries her beau Garv . Soon , the picture - perfect romance turns abusive , forcing her to wrestle with reality .",
       "popularity":2181.77,
       "poster_path":"/5kZi1LCFugNAeDCWOF3ornGNm2W.jpg",
       "vote_average":7.9,
       "vote_count":84
    },
    {
       "backdrop_path":"/1stoC4UstDtmST8x8VATtf08KfL.jpg",
       "first_air_date":"2005-10-13",
       "genre_ids":[
          10766
       ],
       "id":206559,
       "name":"Binnelanders",
       "origin_country":[
          "ZA"
       ],
       "original_language":"af",
       "original_name":"Binnelanders",
       "overview":"A South African Afrikaans soap opera. It is set in and around the fictional private hospital, Binneland Kliniek, in Pretoria, and the storyline follows the trials, trauma and tribulations of the staff and patients of the hospital.",
       "popularity":2432.901,
       "poster_path":"/v9nGSRx5lFz6KEgfmgHJMSgaARC.jpg",
       "vote_average":7,
       "vote_count":4
    },
    {
       "backdrop_path":"/5e1MxLWTJh6n4qtYz0vlevOK6qW.jpg",
       "first_air_date":"2023-07-03",
       "genre_ids":[
          18,
          10766
       ],
       "id":229932,
       "name":"Pyaar Ka Pehla Adhyaya  - Shiv Shakti",
       "origin_country":[
          "IN"
       ],
       "original_language":"hi",
       "original_name":"Pyaar Ka Pehla Adhyaya  - Shiv Shakti",
       "overview":"Shiv has a rewarding career as a doctor, but his personal life is in tatters. Shakti, an orphan, is a nurturer by nature. Will Shakti heal a broken Shiv?",
       "popularity":2063.072,
       "poster_path":"/jHK9bCDefHq43cHvMVUM7SLumYF.jpg",
       "vote_average":8.1,
       "vote_count":52
    },
    {
       "backdrop_path":"/gzAvd0pYKGkq5ZXTx7ejcbwTg1t.jpg",
       "first_air_date":"2023-08-30",
       "genre_ids":[
          18
       ],
       "id":115546,
       "name":"In Our Splendid Time",
       "origin_country":[
          "CN"
       ],
       "original_language":"zh",
       "original_name":"最灿烂的我们",
       "overview":"",
       "popularity":2693.676,
       "poster_path":"/7FZ80Nb4FW5hoOnoc2NTZ3idR7U.jpg",
       "vote_average":10,
       "vote_count":1
    },
    {
       "backdrop_path":"/yYNa1nqvNK94xZz3eKyfvZdAvPi.jpg",
       "first_air_date":"2020-11-02",
       "genre_ids":[
          10766
       ],
       "id":112470,
       "name":"Here it all begins",
       "origin_country":[
          "FR"
       ],
       "original_language":"fr",
       "original_name":"Ici tout commence",
       "overview":"",
       "popularity":2014.217,
       "poster_path":"/60cqjI590JKXCAABqCStVmSBGET.jpg",
       "vote_average":7.1,
       "vote_count":27
    }
 ]


}
