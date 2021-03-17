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
  constructor( {id, title, description, image, author, url, sourse, category} ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.author = author;
    this.url = url;
    this.sourse = sourse;
    this.category = category
    }
};
