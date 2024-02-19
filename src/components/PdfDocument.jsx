//importamos al libreria de react-pdf-render para empezar a crear el documento
import { Document, Text, Page, Image, StyleSheet, View } from "@react-pdf/renderer";

import img from "../assets/react-pdf.jpg";

const PdfDocument = () => {
  //creamos los estilos
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      display: 'flex',
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    text: {
      display: 'block',
      fontSize: 20
    },
    imageSize: {
      width: 150,
      
    }
  })
  return (
    <Document>
      <Page size={"A4"} style={styles.page}>
        <View style={styles.section}>
        <Image src={img} style={styles.imageSize}/>
          <Text>Download</Text>
        <Text>
          Aliqua voluptate ea do ea Lorem reprehenderit cillum amet tempor.
          Deserunt incididunt pariatur proident mollit ea sunt nisi. Magna ipsum
          cupidatat labore officia labore. Id labore ad eu cillum adipisicing
          aute dolore. Ut incididunt aute labore ea consequat eiusmod mollit
          aliquip cillum deserunt. Amet incididunt Lorem incididunt aliquip.
        </Text>
        </View>
        <View>
        <Text render={({pageNumber, totalPages}) => `${pageNumber} / ${totalPages}`}/>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
