import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RichText from '../src/components/RichText';
import Video from '../src/components/Video';
import { fetchJSON } from '../src/internals';

export async function getServerSideProps() {
  return { props: {
    ...await fetchJSON('about'),
  } };
}

function About({ Description, VideoURL }) {

  return <main className="entity-page">
    
    <Head>
      <title>Об иституте</title>
    </Head>

    <div className="header">
      <Row className="container">

        <Col className="title" sm={4}>
          <h2>Об иституте</h2>
        </Col>

        <Col className="image" sm={8}>
          <Video src={VideoURL} />
        </Col>

      </Row>
    </div>

    <div className="container">

      <div className="body">
        <RichText source={Description} />
      </div>

    </div>
  
  </main>;
}

export default About;