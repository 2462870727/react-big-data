import React from 'react';
import styles from './RightSider.module.scss';
import { ScrollBoard, Decoration4 } from '@jiaminghi/data-view-react';

// 用户列表配置
const userListConfig = {
  header: ['机构名称', '使用服务', '热力值', '使用时间'],
  data: [
    ['政务云', '数据加密', '78', '2000'],
    ['社保局', '数据加密', '56', '2323'],
    ['公安系', '身份认证', '68', '434'],
    ['财政输入', 'SSL VPN加密', '89', '8664'],
    ['人力资源部', '数据加密', '84', '3467'],
    ['采购计划部', '加密云服务器', '45', '1000'],
    ['基础信息部', '行7列2', '55', '2359'],

    ['安全后勤区', '安全认证网关', '77', '3862'],
    ['劳动监察部门', '服务器密码机', '37', '8347'],
    ['IT技术安全云', '信息加密网关', '23', '1357']
  ],
  index: true,
  headerHeight: 50,
  align: ['center'],
  oddRowBGC: '#011e46',
  evenRowBGC: '#01265a',
  headerBGC: '#004099'
};

const RightSider = () => {
  return (
    <section className={styles.rightSider}>
      <div className={styles.userWrap}>
        <p>用户列表</p>
        <div className={styles.userList}>
          <ScrollBoard config={userListConfig} />
        </div>
      </div>
      <div className={styles.RightBorder}>
        <Decoration4 color={['#004099']} />
      </div>
    </section>
  );
};

export default RightSider;
