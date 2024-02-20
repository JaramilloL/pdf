//para poder descargar el archivo de pdf creado necesitamos llamara una funcion de react-pdf
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import PdfDocument from './components/PdfDocument'
import JsPdf from './components/JsPdf'

const App = () => {
  return (
    <div>
    <PDFViewer>
      <PdfDocument/>
    </PDFViewer>
      <PDFDownloadLink document={<PdfDocument/>} fileName='ejemplo.pdf'>
        {
          //dentro creamos validacione para la descarga del atchivo //, url, error, blob
          ({ loading }) => loading? <p>Loading...</p> : <button>Download</button>
        }
      </PDFDownloadLink>

        <hr/>
        <h3>New PDF</h3>
        <JsPdf/>
    </div>
  )
}

export default App