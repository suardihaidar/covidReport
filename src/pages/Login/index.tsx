import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonInput, 
  IonText, 
  IonGrid, 
  IonRow, 
  IonCol,
  useIonViewDidEnter,
} from '@ionic/react';
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

import firebase from '../../config/firebase'
import './style.css';

const Login: React.FC = () => {
  const history = useHistory();

  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [isOtp, setIsOtp] = useState(false)

  useIonViewDidEnter(() => {
    firebase.auth().useDeviceLanguage();
    resetState();
    (window as any).recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-verifier', {
      size: 'invisible',
      'callback': (res: any) => {
        // submitPhoneNumber();
      }
    });  
  });
    
  const submitPhoneNumber = () => {
    const recaptchaVerifier = (window as any).recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(`+62${phoneNumber}`, recaptchaVerifier)
      .then(function(confirmationResult: any) {
        (window as any).confirmationResult = confirmationResult;
        setIsOtp(true)
      })
      .catch(function(error: any) {
        console.log("Error:", error.code);
      });
  }

  const verifyOtp = () => {
    const confirmationResult = (window as any).confirmationResult
    confirmationResult.confirm(otp).then((res: any) => {
      // const user = result.user;
      console.log('Result: ', res)
      history.push("/home");
      resetState()
    }).catch(function(error: any) {
      console.log("Error:", error);
      resetState()
    });
  }

  const resetState = () => {
    setIsOtp(false);
    setOtp('');
    setPhoneNumber('');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      {!isOtp ? (
      <IonContent className="ion-padding">
          <IonGrid>
            <IonRow className="ion-align-items-center">
              <IonCol size="2" sizeSm="1" className="ion-text-end"><IonText>+62</IonText></IonCol>
              <IonCol>
                <IonInput 
                  placeholder="Please input your phone number" 
                  value={phoneNumber}
                  onIonChange={(e: any) => setPhoneNumber(e.target.value.replace(/^[^1-9]/, ''))}/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-end">
                <IonButton onClick={() => submitPhoneNumber()}>Next</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
      </IonContent>
      ) : (
        <IonContent className="ion-padding">
          <IonGrid>
            <IonTitle>OTP</IonTitle>
            <IonRow className="ion-align-items-center">
              <IonCol>
                <IonInput 
                  placeholder="Please input the OTP you receive" 
                  onIonChange={(e: any) => setOtp(e.target.value)}/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-end">
                <IonButton onClick={() => verifyOtp()}>Verify</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
      </IonContent>)}
      <div hidden id="recaptcha-verifier"></div>
    </IonPage>
  ); 
};

export default Login;

