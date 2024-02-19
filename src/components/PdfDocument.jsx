//importamos al libreria de react-pdf-render para empezar a crear el documento
import {
  Document,
  Text,
  Page,
  Image,
  StyleSheet,
  View,
} from "@react-pdf/renderer";

import img from "../assets/react-pdf.jpg";

const PdfDocument = () => {
  //creamos los estilos
  const styles = StyleSheet.create({
    page: {
      
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      textAlign: "justify",
      marginTop: 20,
      fontSize: 20,
      fontFamily: 'Helvetica'
    },
    imageSize: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
      fontFamily: "Helvetica",
      margin: 20
    },
    pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: -30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  });
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Image src={img} style={styles.imageSize} />
          <Text style={styles.title}>Text Download</Text>
          <Text>
            Aliqua voluptate ea do ea Lorem reprehenderit cillum amet tempor.
            Deserunt incididunt pariatur proident mollit ea sunt nisi. Magna
            ipsum cupidatat labore officia labore. Id labore ad eu cillum
            adipisicing aute dolore. Ut incididunt aute labore ea consequat
            eiusmod mollit aliquip cillum deserunt. Amet incididunt Lorem
            incididunt aliquip.
          </Text>
          <Text>
            Aliqua voluptate ea do ea Lorem reprehenderit cillum amet tempor.
            Deserunt incididunt pariatur proident mollit ea sunt nisi. Magna
            ipsum cupidatat labore officia labore. Id labore ad eu cillum
            adipisicing aute dolore. Ut incididunt aute labore ea consequat
            eiusmod mollit aliquip cillum deserunt. Amet incididunt Lorem
            incididunt aliquip.
          </Text>
          <Text>
            Aliqua voluptate ea do ea Lorem reprehenderit cillum amet tempor.
            Deserunt incididunt pariatur proident mollit ea sunt nisi. Magna
            ipsum cupidatat labore officia labore. Id labore ad eu cillum
            adipisicing aute dolore. Ut incididunt aute labore ea consequat
            eiusmod mollit aliquip cillum deserunt. Amet incididunt Lorem
            incididunt aliquip.
          </Text>
          <Text>
            Aliqua voluptate ea do ea Lorem reprehenderit cillum amet tempor.
            Deserunt incididunt pariatur proident mollit ea sunt nisi. Magna
            ipsum cupidatat labore officia labore. Id labore ad eu cillum
            adipisicing aute dolore. Ut incididunt aute labore ea consequat
            eiusmod mollit aliquip cillum deserunt. Amet incididunt Lorem
            incididunt aliquip.
          </Text>
          <Text>
            Aliqua voluptate ea do ea Lorem reprehenderit cillum amet tempor.
            Deserunt incididunt pariatur proident mollit ea sunt nisi. Magna
            ipsum cupidatat labore officia labore. Id labore ad eu cillum
            adipisicing aute dolore. Ut incididunt aute labore ea consequat
            eiusmod mollit aliquip cillum deserunt. Amet incididunt Lorem
            incididunt aliquip.
          </Text>
          <Text>
            Aliqua voluptate ea do ea Lorem reprehenderit cillum amet tempor.
            Deserunt incididunt pariatur proident mollit ea sunt nisi. Magna
            ipsum cupidatat labore officia labore. Id labore ad eu cillum
            adipisicing aute dolore. Ut incididunt aute labore ea consequat
            eiusmod mollit aliquip cillum deserunt. Amet incididunt Lorem
            incididunt aliquip.
          </Text>
          <Text>
            Aliqua voluptate ea do ea Lorem reprehenderit cillum amet tempor.
            Deserunt incididunt pariatur proident mollit ea sunt nisi. Magna
            ipsum cupidatat labore officia labore. Id labore ad eu cillum
            adipisicing aute dolore. Ut incididunt aute labore ea consequat
            eiusmod mollit aliquip cillum deserunt. Amet incididunt Lorem
            incididunt aliquip.
          </Text>
          <Text>
            Aliqua voluptate ea do ea Lorem reprehenderit cillum amet tempor.
            Deserunt incididunt pariatur proident mollit ea sunt nisi. Magna
            ipsum cupidatat labore officia labore. Id labore ad eu cillum
            adipisicing aute dolore. Ut incididunt aute labore ea consequat
            eiusmod mollit aliquip cillum deserunt. Amet incididunt Lorem
            incididunt aliquip.
          </Text>
          <Text>
            Aliqua voluptate ea do ea Lorem reprehenderit cillum amet tempor.
            Deserunt incididunt pariatur proident mollit ea sunt nisi. Magna
            ipsum cupidatat labore officia labore. Id labore ad eu cillum
            adipisicing aute dolore. Ut incididunt aute labore ea consequat
            eiusmod mollit aliquip cillum deserunt. Amet incididunt Lorem
            incididunt aliquip.
          </Text>
          <Text>
            Aliqua voluptate ea do ea Lorem reprehenderit cillum amet tempor.
            Deserunt incididunt pariatur proident mollit ea sunt nisi. Magna
            ipsum cupidatat labore officia labore. Id labore ad eu cillum
            adipisicing aute dolore. Ut incididunt aute labore ea consequat
            eiusmod mollit aliquip cillum deserunt. Amet incididunt Lorem
            incididunt aliquip.
          </Text>
        </View>
        <View>
          <Text
          style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
