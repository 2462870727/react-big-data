import React, { useState } from 'react';
import styles from './LeftSider.module.scss';
import {
  Decoration1,
  BorderBox7,
  Decoration4,
  Decoration2,
  Decoration8,
  ScrollBoard,
  Decoration7,
  BorderBox10,
  Charts,
  WaterLevelPond,
  ActiveRingChart,
  WaterLevelPond
} from '@jiaminghi/data-view-react';

// 硬件列表
const hardwareList = {
  header: ['服务器名称', '数量', '状态'],
  headerBGC: '#003885',
  data: [
    ['服务器密码机', '1', '正常'],
    ['云密码机', '2', '正常'],
    ['安全认证网关', '5', '正常'],
    ['数据加密服务器', '1', '<span style="color:#ff2a00;">异常</span>'],
    ['SSL VPN', '3', '<span style="color:#00d5ff;">未知</span>'],
    ['IPSec 服务器', '1', '正常']
  ]
};

// 负载均衡 内存 配置
const loadInfo = {
  data: [
    {
      name: 'VPN',
      value: 55
    },
    {
      name: '云加密服务器',
      value: 120
    },
    {
      name: '安全网关',
      value: 78
    },
    {
      name: '数据加密服务器',
      value: 66
    },
    {
      name: '接口加密服务器',
      value: 80
    }
  ]
};

const option = {
  title: {
    text: '内存占用',
    style: {
      fill: '#fff',
      fontSize: 15,
      textAlign: 'center'
    },
    offset: [0, 120]
  },
  series: [
    {
      type: 'gauge',
      data: [{ name: 'itemA', value: 55 }],
      center: ['50%', '55%'],
      axisLabel: {
        formatter: '{value}%',
        style: {
          fill: '#fff'
        }
      },
      axisTick: {
        style: {
          stroke: '#fff'
        }
      },
      animationCurve: 'easeInOutBack'
    }
  ]
};

// 内存占比配置
const saveConfig = {
  title: {
    text: '存储占用',
    style: {
      fill: '#fff',
      fontSize: 15,
      textAlign: 'center'
    },
    offset: [0, 120]
  },
  series: [
    {
      type: 'gauge',
      data: [{ name: 'itemA', value: 20 }],
      center: ['50%', '55%'],
      axisLabel: {
        formatter: '{value}%',
        style: {
          fill: '#00ffff'
        }
      },
      axisTick: {
        style: {
          stroke: '#fff'
        }
      },
      animationCurve: 'easeInOutBack'
    }
  ]
};

// 加密占比配置
const sslConfig = {
  title: {
    text: '加密占比',
    style: {
      fill: '#fff',
      fontSize: 15,
      textAlign: 'center'
    },
    offset: [0, 120]
  },
  series: [
    {
      type: 'gauge',
      data: [{ name: 'itemA', value: 72 }],
      center: ['50%', '55%'],
      axisLabel: {
        formatter: '{value}%',
        style: {
          fill: '#00ffff'
        }
      },
      axisTick: {
        style: {
          stroke: '#fff'
        }
      },
      animationCurve: 'easeInOutBack'
    }
  ]
};

const Left = () => {
  return (
    <section>
      <div className={styles.headerWrap}>
        <p className={styles.title}>软件服务</p>
        <div className={styles.titleDec}>
          <Decoration1 />
        </div>
      </div>
      <div className={styles.serviceWrap}>
        <BorderBox7>
          <div className={styles.firstFloor}>
            <p className={styles.item}>密钥分发服务</p>
            <p className={styles.center}>数字签名服务</p>
            <div className={styles.itemBorder}>
              <Decoration2 reverse={true} />
            </div>
            <p className={styles.item}>数据加密服务</p>
          </div>
          <div className={styles.contentBorder}>
            <Decoration4 reverse={true} />
          </div>
          <div className={styles.firstFloor}>
            <p className={styles.item}>数据透明传输服务</p>
            <p className={styles.center}>身份认证服务</p>
            <p className={styles.item}>密钥分发服务</p>
          </div>
        </BorderBox7>
      </div>
      <div className={styles.hardwareWrap}>
        <div className={styles.titleDec}>
          <Decoration8 />
        </div>
        <span>加密硬件</span>
      </div>
      <div className={styles.hardwareTable}>
        <ScrollBoard config={hardwareList} />
      </div>

      {/* 负载均衡板块 */}
      <div className={styles.loadWrap}>
        <div className={styles.loadHeader}>
          <Decoration7>
            <p className={styles.loadTitle}>硬件负载</p>
          </Decoration7>
        </div>
        <div className={styles.loadContent}>
          <BorderBox10>
            <div className={styles.item}>
              <Charts option={option} className={styles.loadInfo} />
              <Charts option={saveConfig} className={styles.loadInfo} />
              <Charts option={sslConfig} className={styles.loadInfo} />
            </div>
          </BorderBox10>
        </div>
      </div>
    </section>
  );
};

export default Left;
