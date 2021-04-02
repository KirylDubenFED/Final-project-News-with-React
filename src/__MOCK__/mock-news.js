import { News } from "../../entities/news";

export const MOCK_NEWS = [
  new News( {id, title, description, image, author, url, category, releaseDate}: {
    id: 1,
    title: 'Всадник без головы',
    url: '',
    image: '',
    description: 'Новость про Леху что-нить с мотоциклом',
    author: 'Kiryl Duben',
    category: 'Road',
    releaseDate: '21/03/2021'
  }),

  new News( {id, title, description, image, author, url, category, releaseDate}: {
    id: 2,
    title: 'Белая принцесса',
    url: '',
    image: '',
    description: 'Новость про Аню что-нить придумаю',
    author: 'Kiryl Duben',
    category: 'beauty',
    releaseDate: '26/01/2021'
  }),
]