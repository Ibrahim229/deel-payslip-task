import { useState } from 'react'
import { Payslip, getPayslip } from '../../data/Payslip'
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
  IonFooter,
} from '@ionic/react'
import { useParams } from 'react-router'
import './PayslipView.css'
import formatDate from '../../utils/date/dateFormat'

const ViewPayslip: React.FC = () => {
  const [payslip, setPayslip] = useState<Payslip>()
  const params = useParams<{ id: string }>()

  useIonViewWillEnter(() => {
    const psyl = getPayslip(params.id)
    setPayslip(psyl)
  })

  const handleDownload = async () => {}

  return (
    <IonPage id="view-payslip-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton
              text="Payslip Details"
              defaultHref="/home"
            ></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      {payslip ? (
        <>
          <IonContent className="ion-padding" fullscreen>
            <>
              <h2>ID: {payslip.id}</h2>
              <p>
                Period: {formatDate(payslip.fromDate)} to{' '}
                {formatDate(payslip.toDate)}
              </p>
            </>
          </IonContent>
          <IonFooter className="ion-padding">
            <IonButton expand="block" onClick={handleDownload}>
              Download Payslip
            </IonButton>
          </IonFooter>
        </>
      ) : (
        <div>Payslip not found</div>
      )}
    </IonPage>
  )
}

export default ViewPayslip
