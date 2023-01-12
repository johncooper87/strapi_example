import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import RichText from '../../src/components/RichText';
import EntityHeader from '../../src/components/EntityHeader';
import { loadItem, getRefererPage } from '../../src/internals';

export async function getServerSideProps({ params: { id }, req }) {
  return { props: {
    ...await loadItem('practice-events/', id),
    refererPage: getRefererPage(req)
  } };
}

function StudyEvent({ item, refererPage }) {

  const { Image, Content } = item;

  return <main className="entity-page">
    
    <EntityHeader {...{ Image }} />

    <div className="container">

      <div className="body">
        <RichText source={Content} />
      </div>

      <div className="foot">
        <Link href={`/practice-events?page=${refererPage}`}>
          <Button className="button" variant="primary">Назад</Button>
        </Link>
      </div>

    </div>
  
  </main>;
}

export default StudyEvent;