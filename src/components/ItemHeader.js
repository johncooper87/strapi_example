import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { api } from '../internals';

export default function ItemHeader({ Title, Image, imgW = 5, titleW = 7 }) {
  const hasImage = Boolean(Image);
  const hasTitle = Boolean(Title);

  return <Row className="header">

    {hasImage && <Col className="image" sm={hasTitle ? imgW : 12}>
      <div className="blur-edges">
        <img src={api + Image?.url} />
      </div>
    </Col>}

    {hasTitle && <Col className="title" sm={hasImage ? titleW : 12}>
      <h5>{Title}</h5>
    </Col>}
    
  </Row>;
};