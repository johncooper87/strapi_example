import Head from 'next/head';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import ItemHeader from '../src/components/ItemHeader';
import { fetchJSON } from '../src/internals';

export async function getServerSideProps() {
  return { props: {
    departments: await fetchJSON('departments')
  } };
}

function DepartmentItem({ data: { id, Name: Title, Description } }) {

  return <div className="item department-item">
    <div className="card">

      <ItemHeader {...{ Title }} />
      
      <div className="body">
        {Description}
      </div>

      <div className="actions">
        <Link href="department/[id]" as={`/department/${id}`}>
          <Button className="button" variant="primary">Подробнее</Button>
        </Link>
      </div>

    </div>
  </div>;
}

function Departments({ departments }) {

  return <main className="container">
    <Head>
      <title>Кафедры</title>
    </Head>

    <h1 className="title">Кафедры</h1>

    <div>
      {departments.map(
        item => <DepartmentItem key={item.id} data={item} />
      )}
    </div>

  </main>;
}

export default Departments;