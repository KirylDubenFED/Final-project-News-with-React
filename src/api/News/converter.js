import { News } from "../../entities/news"

export const converter = (artiklesFromServer) => {
  return artiklesFromServer.map((article, index) =>
    new News({
      id: index,
      title: article.title,
      description: article.description,
      imageUrl: article.urlToImage,
      author: article.author,
      link: article.url,
    })
  );
}