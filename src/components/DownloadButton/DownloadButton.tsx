import { useState } from 'react'
import { IonButton, IonIcon, IonProgressBar } from '@ionic/react'
import { cloudDownloadOutline } from 'ionicons/icons'
import { Directory, Filesystem } from '@capacitor/filesystem'
import { FileOpener } from '@capacitor-community/file-opener'

interface DownloadButtonProps {
    downloadUrl: string
}
const DownloadButton: React.FC<DownloadButtonProps> = ({ downloadUrl }) => {
    const [downloading, setDownloading] = useState(false)
    const [progressPercentage, setProgressPercentage] = useState(0)

    const startDownload = async () => {
        try {
            setDownloading(true)
            const filePath = `${+new Date()}.pdf`

            Filesystem.addListener('progress', (progress) => {
                console.log('progress', progress)
                setProgressPercentage(progress.bytes / progress.contentLength)
            })

            const { path } = await Filesystem.downloadFile({
                url: downloadUrl,
                path: filePath,
                directory: Directory.Data,
                progress: true,
            })
            setDownloading(false)
            FileOpener.open({ filePath: path ?? '' })
        } catch (error) {
            console.error('Download error:', error)
        }
    }

    return downloading ? (
        <IonProgressBar 
           
            value={progressPercentage}
        ></IonProgressBar>
    ) : (
        <IonButton expand="block" onClick={startDownload}>
            <IonIcon icon={cloudDownloadOutline} />
            <span style={{ marginLeft: '8px' }}>Download Payslip</span>
        </IonButton>
    )
}

export default DownloadButton
