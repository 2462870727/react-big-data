import React from 'react';
import nowDate from '../../utils/day';
import styles from './HeaderTitle.module.scss';
import {
  BorderBox5,
  Decoration5,
  Decoration2,
  Decoration6
} from '@jiaminghi/data-view-react';

const HeaderTitle = () => {
  return (
    <>
      <div className={styles.headerWrap}>
        <div className={styles.titleWrap}>
          <BorderBox5>
            <h1>密码管理平台</h1>
            <div className={styles.nameDec}>
              <Decoration6 />
            </div>
          </BorderBox5>
        </div>

        <div>
          <p className={styles.day}>{nowDate}</p>
          <div className={styles.dayDec}>
            <Decoration2 />
          </div>
        </div>
      </div>
      <div className={styles.footerDec}>
        {/* <Decoration5 /> */}
        <Decoration2 color={['#00ffff']}/>
      </div>
    </>
  );
};

export default HeaderTitle;
