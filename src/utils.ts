import { Volume } from './Pages/booksInfo';
import NoImage from './assets/images/NoImage.jpg';

interface VolumeInfoArray {
  items: Volume[];
}

export const updateBooksData = (data: VolumeInfoArray) => {
  data.items.map(({ volumeInfo }) => {
    if (volumeInfo.title && volumeInfo.title.length >= 15) {
      volumeInfo.title = volumeInfo.title.slice(0, 15) + '…';
    } else if (!volumeInfo.title) {
      volumeInfo.title = 'unknown';
    }
    if (!volumeInfo.imageLinks || !volumeInfo.imageLinks.thumbnail) {
      volumeInfo.imageLinks = { thumbnail: NoImage };
    }
    if (!volumeInfo.averageRating) {
      volumeInfo.averageRating = 0;
    }
    if (volumeInfo.authors && volumeInfo.authors[0].length >= 15) {
      volumeInfo.authors[0] = volumeInfo.authors[0].slice(0, 15) + '…';
    } else if (!volumeInfo.authors) {
      volumeInfo.authors = ['unknown'];
    }
    return volumeInfo;
  });
};
export const API_KEY = 'AIzaSyD94YYDIB3UQ1-VWozErf5Z3sxdOo5KLaI';
export const BOOKS_IN_PAGE = 20;
export const BASE_URL = `https://www.googleapis.com/books/v1/volumes?key=${API_KEY}&printType=books`;

export enum ButtonPaginateSign {
  plus = '+',
  minus = '-',
}
