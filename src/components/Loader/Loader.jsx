import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.container}>
      <div className={s.circle}>
        LOADING
        <span className={s.dote}></span>
      </div>
    </div>
  );
};

export default Loader;
