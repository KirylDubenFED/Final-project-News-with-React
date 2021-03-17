import { News } from "../../entities/news"

export const converter = (resultsFromServer) => {
  return resultsFromServer.map((result) =>
    new News({
      id: result.id,
      title: result.webTitle,
      description: result.description,
      imageUrl: result.urlToImage,
      author: result.author,
      link: result.webUrl,
      releaseDate: result.webPublicationDate
    })
  );
}