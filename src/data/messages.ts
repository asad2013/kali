export interface Movie {
  movieName: string;
  subject: string;
  date: string;
  id: number;
  image:string;
}

const movies: Movie[] = [
  {
    movieName: 'ladybug',
    subject: 'New event: Trip to Vegas',
    date: '9:32 AM',
    id: 0,
    image: "hello.avif",
  },

];

export const getMessages = () => movies;

export const getMessage = (id: number) => movies.find(m => m.id === id);
