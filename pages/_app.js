//import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Head from 'next/head';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faVk, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
//import { config } from '@fortawesome/fontawesome-svg-core';
//config.autoAddCss = false;

function AboutUsBlock({ title, icon, text }) {
  return <div className="contact">
    <div>
      <FontAwesomeIcon className="footer-icon" icon={icon} />
    </div>
    <div>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  </div>;
}

function SiteRef({ icon, name, href }) {
  return <div className="siteref">
  <div>
    <FontAwesomeIcon className="footer-icon" icon={icon} />
  </div>
  <div><a href={href}>{name}</a></div>
</div>;
}

function InfoItem({ name, href }) {
  return <div className="info-item">
  <div><a href={href}>{name}</a></div>
</div>;
}

function App({ Component, pageProps }) {

  return <>

    <Head>
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Head>

    <div className="navbar-wrapper-top">
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
        <Navbar.Brand href="/"><img className="logo" src="/logo.png" /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link className="nav-1" href="/about">Об институте</Nav.Link>
            <Nav.Link className="nav-1" href="/departments">Кафедры</Nav.Link>
            <Nav.Link className="nav-2" href="/study-events">Учеба</Nav.Link>
            <Nav.Link className="nav-2" href="/practice-events">Практика</Nav.Link>
            <Nav.Link className="nav-3" href="/student-life-blog">Студенческая жизнь</Nav.Link>
            <Nav.Link className="nav-3" href="/declarations">Заявления</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </ Navbar>
    </ div>

    <Component {...pageProps} />

    <footer>
      <div className="inner">

        <h4 className="name">Институт филологии, иностранных языков и медиакоммуникаций</h4>
        
        <Row>

          <Col sm={4} className="footer-1">
            <h5>Контакты</h5>
            <AboutUsBlock title="Адрес:" icon={faMapMarkerAlt} text="650000 г. Кемерово, ул. Красная, 6, ауд. 5309" />
            <AboutUsBlock title="Телефон:" icon={faPhone} text="+7 (3842) 58-27-45" />
            <AboutUsBlock title="Эл. почта:" icon={faEnvelope} text="ifiyam@kemsu.ru" />
          </Col>

          <Col sm={4} className="footer-2">
            <h5>Мы в интернете</h5>
            <SiteRef icon={faGlobe} name="На сайте КемГУ" href="https://kemsu.ru/university/structure/institutes/institute-of-philology-foreign-languages-and-media-communications" />
            <SiteRef icon={faVk} name="ВКонтакте" href="https://vk.com/ifiyam" />
            <SiteRef icon={faInstagramSquare} name="В инстаграме" href="https://www.instagram.com/ifiyam_kemsu" />
          </Col>

          <Col sm={4} className="footer-3">
            <h5>Информация</h5>
            <InfoItem name="«Статус-ВО!»" href="https://www.instagram.com/ifiyam_kemsu" />
            <InfoItem name="Лонгрид о направлениях ИФИЯМ" href="http://longreadifiyam.kemsu.tilda.ws" />
            <InfoItem name="Расписание занятий" href="https://kemsu.ru/education/schedule" />
            <InfoItem name="Студенту" href="https://kemsu.ru/student" />
            <InfoItem name="Абитуриенту" href="https://kemsu.ru/abiturient" />
          </Col>

        </Row>

      </div>

    </footer>
  </>;

}

export default App;