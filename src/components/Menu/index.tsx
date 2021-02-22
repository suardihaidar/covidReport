import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  // IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonTitle,
} from '@ionic/react';
import { logOutOutline, logOut } from 'ionicons/icons';
import { useLocation } from 'react-router-dom';
import './style.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Log Out',
    url: '/login',
    iosIcon: logOutOutline,
    mdIcon: logOut
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="menu" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          {/* <IonListHeader>Welcome</IonListHeader> */}
          <IonTitle>Admin</IonTitle>
          <IonNote>xxxx-xxxx-xxxx</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
