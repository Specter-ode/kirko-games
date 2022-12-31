import s from './SupportPage.module.css';
import Container from 'components/Container/Container';

const SupportPage = () => {
  return (
    <main>
      <Container>
        <section className={s.section}>
          <h2 className={s.title}>Support team 24/7</h2>
          <p className={s.text}>Having problems or have questions?</p>
          <p className={s.text}>Do you have any suggestions for cooperation?</p>
          <p className={s.text}>Do not hesitate to contact our support team via email </p>
          <p className={s.text}>
            <a href="mailto:kirko-games@info.com" className={s.link}>
              kirko-games@info.com
            </a>
          </p>
        </section>
      </Container>
    </main>
  );
};

export default SupportPage;
