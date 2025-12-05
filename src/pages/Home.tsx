import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import TestA4Printer from './TestA4Printer';

const Home: React.FC = () => {
  return (
    <TestA4Printer></TestA4Printer>
  );
};

export default Home;
