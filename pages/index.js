import Head from 'next/head';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Paginator from '../src/components/Paginator';
import ItemHeader from '../src/components/ItemHeader';
import { loadItemsPage } from '../src/internals';

export async function getServerSideProps({ query: { page } }) {
  return { props: {
    ...await loadItemsPage('news-articles', page, 5)
  } };
}

function NewsArticleItem({ data: { Abstract, Image, Title, id } }) {
  return <div className="item">
    <div className="card">

      <ItemHeader {...{ Image, Title }} />
      
      <div className="body">
        {Abstract}
      </div>

      <div className="actions">
        <Link href="/news-article/[id]" as={`/news-article/${id}`}>
          <Button className="button" variant="primary">Подробнее</Button>
        </Link>
      </div>

    </div>
  </div>;
}

function NewsArticleList({ items, page, totalPages }) {

  return <main className="container">
    <Head>
      <title>Новости</title>
    </Head>

    <h1 className="title">Новости</h1>

    <div>
      {items.map(
        item => <NewsArticleItem key={item.id} data={item} />
      )}
    </div>

    <div>
      <Paginator {...{ page, totalPages }} />
    </div>

  </main>;
}

export default NewsArticleList;