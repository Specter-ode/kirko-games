import Container from 'components/Container/Container';
import s from './TermsPage.module.css';

const TermsPage = () => {
  return (
    <main>
      <Container>
        <section className={s.section}>
          <h2 className={s.title}>Terms of services</h2>
          <p className={s.text}>
            BY INSTALLING, USING OR OTHERWISE ACCESSING THE SERVICE, YOU AGREE TO THESE TERMS OF SERVICE. IF YOU DO NOT
            AGREE TO THESE TERMS OF SERVICE, PLEASE DO NOT INSTALL, USE OR OTHERWISE ACCESS THE SERVICE. USE OF THE
            SERVICE IS VOID WHERE PROHIBITED.
          </p>
        </section>
      </Container>
    </main>
  );
};

export default TermsPage;
