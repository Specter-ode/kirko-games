import s from './App.module.css';
import PagesRoutes from 'PagesRoutes/PagesRoutes';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <div className={s.container}>
        <PagesRoutes />
      </div>
      <Footer />
    </>
  );
};

export default App;
