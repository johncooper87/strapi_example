import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import RichText from '../../src/components/RichText';
import EntityHeader from '../../src/components/EntityHeader';
import { api, loadItem, getRefererPage } from '../../src/internals';

export async function getServerSideProps({ params: { id }, req }) {
  return { props: {
    ...await loadItem('study-events/', id),
    refererPage: getRefererPage(req)
  } };
}

function StudyEvent({ item, refererPage }) {

  const { Abstract: Title, Image, Content, Attachments } = item;

  return <main className="entity-page study-event-page">
    
    <EntityHeader {...{ Image, Title, imgW: 4, titleW: 8 }} />

    <div className="container">

      <div className="body">
        <RichText source={Content} />
        {Attachments?.length > 0 && <div className="attachment-list-container">
          <p><b>Прикрепленные файлы:</b></p>
          {Attachments.map(({ id, name, url }) => <div key={id}>
            <a target="_blank" href={api + url}>{name}</a>
          </div>)}
        </div>}
      </div>

      <div className="foot">
        <Link href={`/study-events?page=${refererPage}`}>
          <Button className="button" variant="primary">Назад</Button>
        </Link>
      </div>

    </div>
  
  </main>;
}

export default StudyEvent;