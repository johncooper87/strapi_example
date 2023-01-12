import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { api, fetchJSON } from '../src/internals';

export async function getServerSideProps() {
  return { props: {
    declarations: await fetchJSON('declarations'),
  } };
}

function DeclarationItem({ file: { name, url, seqNum } }) {
  return <div className="declaration">
    {/* <span>{seqNum}</span> */}
    <a target="_blank" href={api + url}>{name}</a>
  </div>;
}

function getFileOrder(file) {
  const dotPos = file.name.indexOf('.');
  let seqNum = file.name.slice(0, dotPos);
  seqNum = Number(seqNum);
  if (isNaN(seqNum)) seqNum = 0;
  const name = file.name.slice(dotPos + 1);
  
  return {
    ...file,
    name,
    seqNum
  }
}

function orderFiles(files) {
  return files.map(getFileOrder).sort((file1, file2) => file1.seqNum - file2.seqNum);
}

function Declarations({ declarations: { Files } }) {

  const orderedFiles = orderFiles(Files);

  return <main className="entity-page declarations">
    
    <Head>
      <title>Заявления</title>
    </Head>

    <div className="header">
      <Row className="container">

        <Col className="title" sm={12}>
          <h2>Заявления</h2>
        </Col>

      </Row>
    </div>

    <div className="container">

      <div className="body">
        {orderedFiles.map((file) => <DeclarationItem key={file.id} file={file} />)}
      </div>

    </div>
  
  </main>;
}

export default Declarations;