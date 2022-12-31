import Container from 'components/Container/Container';
import s from './PrivacyPage.module.css';

const PrivacyPage = () => {
  return (
    <main>
      <Container>
        <section className={s.section}>
          <h2 className={s.title}>Privacy Policy</h2>
          <p className={s.text}>
            This Privacy Policy applies to KIRKO's games, websites and related services, which we here collectively call
            the Service. We may periodically update this Privacy Policy by posting a new version on supercell.com. If we
            make any material changes, we will notify you as required under applicable law, including by posting a
            notice in the Service prior to the change becoming effective. Your continued use of the Service after the
            effective date will be subject to the new Privacy Policy.
          </p>
          <p className={s.text}>
            When you use our services, you’re trusting us with your information. We understand this is a big
            responsibility and work hard to protect your information.
          </p>
        </section>
      </Container>
    </main>
  );
};

export default PrivacyPage;
