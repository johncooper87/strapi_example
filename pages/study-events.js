import Head from 'next/head';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Paginator from '../src/components/Paginator';
import ItemHeader from '../src/components/ItemHeader';
import { loadItemsPage } from '../src/internals';

export async function getServerSideProps({ query: { page } }) {
  return { props: {
    ...await loadItemsPage('study-events', page, 5)
  } };
}

function StudyEventItem({ data: { Abstract: Title, Image, id } }) {

  return <div className="item study-event-item">
    <div className="card">

      <ItemHeader {...{ Image, Title, imgW: 4, titleW: 8 }} />
      
      <div className="actions">
        <Link href="study-event/[id]" as={`/study-event/${id}`}>
          <Button className="button" variant="primary">Подробнее</Button>
        </Link>
      </div>

    </div>
  </div>;
}

function StudyEventList({ items, page, totalPages }) {

  return <main className="container">
    <Head>
      <title>Учеба</title>
    </Head>

    <h1 className="title">Учеба</h1>

    <div>
      {items.map(
        item => <StudyEventItem key={item.id} data={item} />
      )}
    </div>

    <div>
      <Paginator {...{ page, totalPages }} />
    </div>

  </main>;
}

export default StudyEventList;