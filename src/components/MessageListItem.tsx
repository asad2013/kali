import {
  IonItem,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonCol,
  IonNote
  } from '@ionic/react';
import { Movie} from '../data/movies';
import './MessageListItem.css';
interface MessageListItemProps {
  movie: Movie;
}
const MessageListItem: React.FC<MessageListItemProps> = ({ movie }) => {
  return (
    <IonItem  routerLink={`/message/${movie.id}`} detail={false} >
      <IonCard>
      <img alt="Silhouette of mountains"
       src= {movie.CoverPhoto} />
      <IonCardHeader>
        <IonCardTitle>{movie.title}</IonCardTitle>
        <IonCardSubtitle>{movie.duration}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>{movie.description}</IonCardContent>
    </IonCard>
    </IonItem>
  );
};
export default MessageListItem;