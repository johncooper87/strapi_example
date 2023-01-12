import Head from 'next/head';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Paginator from '../src/components/Paginator';
import ItemHeader from '../src/components/ItemHeader';
import { loadItemsPage } from '../src/internals';

export async function getServerSideProps({ query: { page } }) {
  return { props: {
    ...await loadItemsPage('student-life-blog-articles', page, 5)
  } };
}

function StudentLifeBlogArticleItem({ data: { Abstract, Image, Name: Title, id } }) {
  
  return <div className="item">
    <div className="card">

      <ItemHeader {...{ Image, Title }} />
      
      <div className="body">
        {Abstract}
      </div>

      <div className="actions">
        <Link href="student-life-blog-article/[id]" as={`/student-life-blog-article/${id}`}>
          <Button className="button" variant="primary">Подробнее</Button>
        </Link>
      </div>

    </div>
  </div>;
}

function StudentLifeBlogArticleList({ items, page, totalPages }) {

  return <main className="container">
    <Head>
      <title>Студентческая жизнь</title>
    </Head>

    <h1 className="title">Студентческая жизнь</h1>

    <div>
      {items.map(
        item => <StudentLifeBlogArticleItem key={item.id} data={item} />
      )}
    </div>

    <div>
      <Paginator {...{ page, totalPages }} />
    </div>

  </main>;
}

export default StudentLifeBlogArticleList;