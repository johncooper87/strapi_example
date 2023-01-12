import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { api } from '../internals';

export default function ItemHeader({ Title, Image, imgW = 5, titleW = 7 }) {
  const hasImage = Boolean(Image);
  const hasTitle = Boolean(Title);

  return <>
    <Head>
      <title>{Title}</title>
    </Head>

    <div className="header">
      <Row className="container">

        {hasImage && <Col className="image" sm={hasTitle ? imgW : 12}>
          <div className="blur-edges">
            <img src={api + Image.url} />
          </div>
        </Col>}

        {hasTitle && <Col className="title" sm={hasImage ? titleW : 12}>
          <h3>{Title}</h3>
        </Col>}

      </Row>
    </div>
  </>;
};