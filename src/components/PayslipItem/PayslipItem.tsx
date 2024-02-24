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
    const opened = localStorage.getItem(`payslip_${payslip.id}_opened`)
    setIsOpened(!!opened)
  }, [payslip.id])

  const handleClick = () => {
    localStorage.setItem(`payslip_${payslip.id}_opened`, 'true')
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
