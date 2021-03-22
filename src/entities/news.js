// export class News {
//   constructor( {id, title, description, imageUrl, author, link} ) {
//     this.id = id;
//     this.title = title;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this.author = author;
//     this.link = link;
//     }
// };

export class News {
  constructor( {id, title, description, image, author, url, category, releaseDate} ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.author = author;
    this.url = url;
    this.category = category;
    this.releaseDate = releaseDate;
    }
};
