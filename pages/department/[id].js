import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import RichText from '../../src/components/RichText';
import EntityHeader from '../../src/components/EntityHeader';
import { loadItem } from '../../src/internals';

export async function getServerSideProps({ params: { id } }) {
  return { props: {
    ...await loadItem('departments/', id),
  } };
}

function Department({ item }) {

  const { Name: Title, About, Image } = item;

  return <main className="entity-page">
    
    <EntityHeader {...{ Image, Title, imgW: 6, titleW: 6 }} />

    <div className="container">

      <div className="body">
        <RichText source={About} />
      </div>

      <div className="foot">
        <Link href={`/departments`}>
          <Button className="button" variant="primary">Назад</Button>
        </Link>
      </div>

    </div>
  
  </main>;
}

export default Department;