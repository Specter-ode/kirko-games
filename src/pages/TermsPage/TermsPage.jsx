import Container from 'components/Container/Container';
import s from './TermsPage.module.css';

const TermsPage = () => {
  return (
    <main>
      <Container>
        <section className={s.section}>
          <h2 className={s.header}>Terms of service</h2>
          <h3 className={s.title}>Acceptance of Terms:</h3>
          <p className={s.text}>
            By downloading and using our mobile game, you agree to be bound by these terms of service. If you do not
            agree to these terms, please do not use our mobile game.
          </p>
          <h3 className={s.title}> License:</h3>
          <p className={s.text}>
            We grant you a limited, non-exclusive, non-transferable, and revocable license to use our mobile game for
            your personal, non-commercial use.
          </p>
          <h3 className={s.title}>User Conduct:</h3> 
          <p className={s.text}>
            You agree to use our mobile game in a manner that is legal, ethical, and respectful of other users. You will
            not use our mobile game to engage in any illegal activity, harass or bully other users, or violate any
            intellectual property rights.
          </p>
          <h3 className={s.title}>User Content:</h3>
          <p className={s.text}>
            Our mobile game may allow you to create or upload content, such as user-generated levels or custom avatars.
            You retain ownership of your user content, but you grant us a non-exclusive, royalty-free, worldwide, and
            perpetual license to use, modify, and distribute your user content in connection with our mobile game.
          </p>
          <h3 className={s.title}>In-App Purchases:</h3>
          <p className={s.text}>
            Our mobile game may offer in-app purchases, such as virtual currency or additional content. You are
            responsible for any charges incurred through in-app purchases, and we are not responsible for any
            unauthorized purchases made by minors or other unauthorized users.
          </p>
          <h3 className={s.title}>Intellectual Property:</h3>
          <p className={s.text}>
            Our mobile game and all associated content, including but not limited to graphics, logos, and sound effects,
            are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, or
            distribute any content from our mobile game without our prior written consent.
          </p>
          <h3 className={s.title}>Disclaimer of Warranties:</h3>
          <p className={s.text}>
            Our mobile game is provided on an "as is" basis without warranties of any kind, either express or implied,
            including but not limited to warranties of merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>
          <h3 className={s.title}> Limitation of Liability:</h3>
          <p className={s.text}>
            We will not be liable for any damages arising from the use or inability to use our mobile game, including
            but not limited to direct, indirect, incidental, and consequential damages.
          </p>
          <h3 className={s.title}>Termination:</h3>
          <p className={s.text}>
            We may terminate your license to use our mobile game at any time for any reason, without notice or
            liability.
          </p>
        </section>
      </Container>
    </main>
  );
};

export default TermsPage;
