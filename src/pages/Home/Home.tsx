import PayslipListItem from '../../components/PayslipItem/PayslipItem'
import { useState } from 'react'
import { Payslip, getPayslips } from '../../data/Payslip'
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react'
import './Home.css'

const Home: React.FC = () => {
  const [payslips, setPayslips] = useState<Payslip[]>([])

  useIonViewWillEnter(() => {
    const psyls = getPayslips()
    setPayslips(psyls)
  })

  const refresh = (e: CustomEvent) => {
    const psyls = getPayslips()
    setPayslips(psyls)
    setTimeout(() => {
      e.detail.complete()
    }, 3000)
  }

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Payslips</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Payslips</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {payslips.map((m) => (
            <PayslipListItem key={m.id} payslip={m} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Home
