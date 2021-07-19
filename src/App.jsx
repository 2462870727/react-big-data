import React, { useState } from 'react';
import './normalize.css';
import HeaderTitle from './components/HeaderTitle/HeaderTitle';
import LeftSider from './components/LeftSider/LeftSider';
import RightSider from './components/RightSider/RightSider';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import styles from './App.module.scss';
import { FullScreenContainer, Loading } from '@jiaminghi/data-view-react';

export default function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 800);

  return (
    <FullScreenContainer className={styles.wrap}>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <>
          <HeaderTitle />
          <main className={styles.contentWrap}>
            <LeftSider />
            <Main />
            <RightSider />
          </main>
          {/* <Footer /> */}
        </>
      )}
    </FullScreenContainer>
  );
}
