import Container from 'components/Container/Container';
import s from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <main className={s.main}>
      <Container>
        <section className={s.section}>
          <h2 className={s.title}>Our team history</h2>
          <div className={s.block}>
            <p className={s.text}>
              Hello everyone ! We started our journey of creating games 6 years ago, created one game in the "quiz"
              genre and then created a game in the "click" genre, but we were not destined to finish it for various
              reasons. After that we took a break for 6 years, and now we are returning.
            </p>
          </div>
          <div className={s.block}>
            <p className={s.text}>
              We come back with a new approach, New ideas, New experience and knowledge in creating games. Now we are a
              re-starting small company of young guys that wants to surprise our players with new and unique ideas.
              Create games with gameplay that no one else has given before so that you get pleasure from the game every
              day and remember them forever.
            </p>
          </div>
          <div className={s.block}>
            <p className={s.text}>
              You always want to play something new that has not been encountered before, this is what we will try to
              suggest to you in the near future and implement at the best level. And now I propose to dive into our
              games and enjoy the process, we will present you with many opportunities for a cool forwarding time with
              your friends!
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default AboutPage;
