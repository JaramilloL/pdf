//para poder descargar el archivo de pdf creado necesitamos llamara una funcion de react-pdf
import { PDFDownloadLink } from '@react-pdf/renderer'
import PdfDocument from './components/PdfDocument'

const App = () => {
  return (
    <div>
      <PDFDownloadLink document={<PdfDocument/>} fileName='ejemplo.pdf'>
        {
          //dentro creamos validacione para la descarga del atchivo //, url, error, blob
          ({ loading }) => loading? <p>Loading...</p> : <button>Download</button>
        }
      </PDFDownloadLink>

    </div>
  )
}

export default App