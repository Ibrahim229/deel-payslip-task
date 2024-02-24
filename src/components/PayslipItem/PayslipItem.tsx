import { IonItem, IonLabel } from '@ionic/react'
import { Payslip } from '../../data/Payslip'
import './PayslipItem.css'
import formatDate from '../../utils/date/dateFormat'
import { useEffect, useState } from 'react'

interface PayslipListItemProps {
  payslip: Payslip
}

const PayslipListItem: React.FC<PayslipListItemProps> = ({ payslip }) => {
  const [isOpened, setIsOpened] = useState(false)

  useEffect(() => {
    // Check if the item has been opened before
    const opened = localStorage.getItem(`payslip_${payslip.id}_opened`)
    setIsOpened(!!opened)
  }, [payslip.id])

  const handleClick = () => {
    // Store the opened item in local storage
    localStorage.setItem(`payslip_${payslip.id}_opened`, 'true')
    // Update the state to hide the dot
    setIsOpened(true)
  }
  return (
    <IonItem
      routerLink={`/payslip/${payslip.id}`}
      detail={true}
      onClick={handleClick}
    >
      <div
        slot="start"
        className={`dot ${isOpened ? 'dot-hidden' : 'dot-unread'}`}
      ></div>
      <IonLabel className="ion-text-wrap">
        Period: {formatDate(payslip.fromDate)} - {formatDate(payslip.toDate)}
      </IonLabel>
    </IonItem>
  )
}

export default PayslipListItem
