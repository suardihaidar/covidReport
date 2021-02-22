import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButton,
  IonSplitPane,
  IonButtons, 
  IonMenuButton, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonIcon
} from '@ionic/react';
import { create, closeCircle } from 'ionicons/icons';
import { useHistory } from "react-router-dom";

import './style.css';
import Menu from '../../components/Menu'

const Home: React.FC = () => {
  const history = useHistory();

  const submitNewCase = () => {
    
  }

  const editCase = (id: any) => {
    //  /edit-case
    history.push('/home')
  }

  const deleteCase = (id: any) => {

  }

  const dummy = [
    {
      id: 1,
      title: 'Case 1'
    },
    {
      id: 2,
      title: 'Case 2'
    },
    {
      id: 3,
      title: 'Case 3'
    }
  ]

  return (
    <IonContent>
      <IonSplitPane contentId="menu">
        <Menu />
        <IonPage id="menu">
          <IonHeader>
            <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
              <IonTitle>Home</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen className="ion-padding">
            <IonButton onClick={() => submitNewCase()}>Add New Case</IonButton>
            <IonList>
              {dummy.map((val: any) => (
                <IonItem>
                  <IonLabel>{val.title}</IonLabel>
                  <IonButton shape="round" color="success" onClick={() => editCase(val.id)}>
                    <IonIcon icon={create}/>
                  </IonButton>
                  <IonButton shape="round" color="danger" onClick={() => deleteCase(val.id)}>
                    <IonIcon icon={closeCircle}/>
                  </IonButton>
                </IonItem>
              ))}
            </IonList>
          </IonContent>
      </IonPage>
      </IonSplitPane>
    </IonContent>
  );
};

export default Home;
