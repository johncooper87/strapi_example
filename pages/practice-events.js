import Head from 'next/head';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Paginator from '../src/components/Paginator';
import ItemHeader from '../src/components/ItemHeader';
import { loadItemsPage } from '../src/internals';

export async function getServerSideProps({ query: { page } }) {
  return { props: {
    ...await loadItemsPage('practice-events', page, 5)
  } };
}

function PracticeEventItem({ data: { Abstract, Image, id } }) {
  return <div className="item">
    <div className="card">

      <ItemHeader {...{ Image }} />
      
      <div className="body">
        {Abstract}
      </div>

      <div className="actions">
        <Link href="practice-event/[id]" as={`/practice-event/${id}`}>
          <Button className="button" variant="primary">Подробнее</Button>
        </Link>
      </div>

    </div>
  </div>;
}

function PracticeEventList({ items, page, totalPages }) {

  return <main className="container">
    <Head>
      <title>Практика</title>
    </Head>

    <h1 className="title">Практика</h1>

    <div>
      {items.map(
        item => <PracticeEventItem key={item.id} data={item} />
      )}
    </div>

    <div>
      <Paginator {...{ page, totalPages }} />
    </div>

  </main>;
}

export default PracticeEventList;