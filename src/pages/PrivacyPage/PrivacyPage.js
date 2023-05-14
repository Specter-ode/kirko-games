import Container from 'components/Container/Container';
import s from './PrivacyPage.module.css';

const PrivacyPage = () => {
  return (
    <main>
      <Container>
        <section className={s.section}>
          <h2 className={s.header}>Privacy Policy</h2>
          <p className={s.text}>
            This Privacy Policy applies to KIRKO's games, websites and related services, which we here collectively call
            the Service. We may periodically update this Privacy Policy by posting a new version on kirko-games.com. If
            we make any material changes, we will notify you as required under applicable law, including by posting a
            notice in the Service prior to the change becoming effective. Your continued use of the Service after the
            effective date will be subject to the new Privacy Policy.
          </p>
          <p className={s.text}>
            When you use our services, you’re trusting us with your information. We understand this is a big
            responsibility and work hard to protect your information.
          </p>
          <h3 className={s.title}>Information Collection and Use:</h3>
          <p className={s.text}>
            We may collect and use information about you when you use our mobile game. This information may include your
            name, email address, device information, and other personal information. We use this information to provide
            you with the best possible game experience, improve our game, and communicate with you.
          </p>
          <h3 className={s.title}>Information Sharing:</h3>
          <p className={s.text}>
            We do not share your personal information with any third parties, except for our trusted partners who assist
            us in providing the mobile game. These partners are bound by strict confidentiality agreements and are only
            permitted to use your information to provide the services we have requested.
          </p>
          <h3 className={s.title}>Information Protection:</h3>
          <p className={s.text}>
            We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure.
            We use industry-standard encryption technologies and firewalls to protect your data.
          </p>
          <h3 className={s.title}>Permissions:</h3>
          <p className={s.text}>
            Our mobile game may request certain permissions from you. We only request permissions that are necessary for
            the operation of our mobile game. You can choose to deny these permissions, but it may impact your game
            experience.
          </p>
          <h3 className={s.title}>Analytics:</h3>
          <p className={s.text}>
            We may use analytics tools to collect information about your mobile game usage, such as the features you use
            and the time you spend playing. We use this information to improve our mobile game and to provide you with
            personalized content and recommendations.
          </p>
          <h3 className={s.title}>Advertising:</h3>
          <p className={s.text}>
            We may display advertisements in our mobile game. These advertisements may be targeted based on your mobile
            game usage and may use cookies or other tracking technologies. We do not share your personal information
            with advertisers.
          </p>
          <h3 className={s.title}>Changes to Privacy Policy:</h3>
          <p className={s.text}>
            We reserve the right to change this privacy policy at any time. We will notify you of any changes by posting
            a notice in our mobile game or by sending you an email.
          </p>
        </section>
      </Container>
    </main>
  );
};

export default PrivacyPage;
