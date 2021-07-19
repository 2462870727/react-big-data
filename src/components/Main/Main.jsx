import React, { useState, useEffect } from 'react';
import styles from './Main.module.scss';
import {
  DigitalFlop,
  Decoration10,
  CapsuleChart
} from '@jiaminghi/data-view-react';

const Main = () => {
  const [serviceNum, setServiceNum] = useState({ number: [0] });
  const [softNum, setSoftNum] = useState({ number: [0] });
  const [onlineNum, setOnlineNum] = useState({ number: [0] });
  const [closeNum, setCloseNum] = useState({ number: [0] });

  useEffect(() => {
    setServiceNum({ number: [25] });
    setSoftNum({ number: [34] });
    setOnlineNum({ number: [17] });
    setCloseNum({ number: [5] });
  }, []);

  // 软件服务列表
  const serverList = [
    {
      id: 1,
      title: '密钥分发服务',
      data: {
        data: [
          {
            name: '加密天数',
            value: 231
          },
          {
            name: '加密条数',
            value: 567
          },
          {
            name: '掉线天数',
            value: 2
          },
          {
            name: '持续服务天数',
            value: 32
          }
        ],
        unit: '天'
      }
    },
    {
      id: 2,
      title: ' 数字签名服务',
      data: {
        data: [
          {
            name: '加密天数',
            value: 342
          },
          {
            name: '加密条数',
            value: 456
          },
          {
            name: '掉线天数',
            value: 20
          },
          {
            name: '持续服务天数',
            value: 45
          }
        ],
        unit: '天'
      }
    },
    {
      id: 3,
      title: '数据加密服务',
      data: {
        data: [
          {
            name: '加密天数',
            value: 123
          },
          {
            name: '加密条数',
            value: 324
          },
          {
            name: '掉线天数',
            value: 21
          },
          {
            name: '持续服务天数',
            value: 132
          }
        ],
        unit: '天'
      }
    },
    {
      id: 4,
      title: '数据透明传输服务',
      data: {
        data: [
          {
            name: '加密天数',
            value: 432
          },
          {
            name: '加密条数',
            value: 123
          },
          {
            name: '掉线天数',
            value: 6
          },
          {
            name: '持续服务天数',
            value: 133
          }
        ],
        unit: '天'
      }
    },
    {
      id: 5,
      title: '身份认证服务',
      data: {
        data: [
          {
            name: '加密天数',
            value: 365
          },
          {
            name: '加密条数',
            value: 875
          },
          {
            name: '掉线天数',
            value: 22
          },
          {
            name: '持续服务天数',
            value: 98
          }
        ],
        unit: '天'
      }
    }
  ];

  // 硬件列表
  const robList = [
    {
      id: 6,
      title: '服务密码机',
      data: {
        data: [
          {
            name: '加密天数',
            value: 587
          },
          {
            name: '加密条数',
            value: 135
          },
          {
            name: '掉线天数',
            value: 11
          },
          {
            name: '持续服务天数',
            value: 456
          }
        ],
        unit: '天'
      }
    },
    {
      id: 7,
      title: ' 云服务器密码机',
      data: {
        data: [
          {
            name: '加密天数',
            value: 654
          },
          {
            name: '加密条数',
            value: 342
          },
          {
            name: '掉线天数',
            value: 4
          },
          {
            name: '持续服务天数',
            value: 565
          }
        ],
        unit: '天'
      }
    },
    {
      id: 8,
      title: '数据传输透明加密服务器',
      data: {
        data: [
          {
            name: '加密天数',
            value: 532
          },
          {
            name: '加密条数',
            value: 123
          },
          {
            name: '掉线天数',
            value: 43
          },
          {
            name: '持续服务天数',
            value: 645
          }
        ],
        unit: '天'
      }
    },
    {
      id: 9,
      title: '安全认证网关',
      data: {
        data: [
          {
            name: '加密天数',
            value: 231
          },
          {
            name: '加密条数',
            value: 567
          },
          {
            name: '掉线天数',
            value: 2
          },
          {
            name: '持续服务天数',
            value: 32
          }
        ],
        unit: '天'
      }
    },
    {
      id: 10,
      title: 'SSL VPN',
      data: {
        data: [
          {
            name: '加密天数',
            value: 865
          },
          {
            name: '加密条数',
            value: 532
          },
          {
            name: '掉线天数',
            value: 98
          },
          {
            name: '持续服务天数',
            value: 56
          }
        ],
        unit: '天'
      }
    },
    {
      id: 11,
      title: 'IPSec VPN',
      data: {
        data: [
          {
            name: '加密天数',
            value: 333
          },
          {
            name: '加密条数',
            value: 111
          },
          {
            name: '掉线天数',
            value: 29
          },
          {
            name: '持续服务天数',
            value: 999
          }
        ],
        unit: '天'
      }
    }
  ];

  // 底部信息数据
  const [sslInfo, setSslInfo] = useState({
    data: [
      {
        name: '加密天数',
        value: 167
      },
      {
        name: '加密条数',
        value: 670
      },
      {
        name: '掉线天数',
        value: 12
      },
      {
        name: '持续服务天数',
        value: 55
      }
    ],
    unit: '天'
  });

  return (
    <section className={styles.mainContent}>
      <h2 className={styles.safeDay}>
        安全守护
        <div className={styles.day}>
          <span>0</span>
          <span>6</span>
          <span>3</span>
          <span>5</span>
        </div>
        天
      </h2>
      <div className={styles.serviceInfo}>
        <div className={styles.serviceItme}>
          软件服务
          {/* <span>5</span> */}
          <div className={styles.num}>
            <DigitalFlop config={serviceNum} />
          </div>
        </div>
        <div className={styles.serviceItme}>
          软件风险
          {/* <span>1</span> */}
          <div className={styles.num}>
            <DigitalFlop config={softNum} />
          </div>
        </div>
        <div className={styles.serviceItme}>
          在线设备
          {/* <span>7</span> */}
          <div className={styles.num}>
            <DigitalFlop config={onlineNum} />
          </div>
        </div>
        <div className={styles.failItem}>
          离线社保
          <div className={styles.num}>
            <DigitalFlop config={closeNum} />
          </div>
          {/* <span>5</span> */}
        </div>
      </div>

      <Decoration10
        color={['#004099', '#00ffff']}
        style={{ width: '70%', height: '5px', paddingTop: '5px' }}
      />

      <div className={styles.serverWrap}>
        <div className={styles.serverList}>
          {serverList.map(item => (
            <div
              className={styles.serverItem}
              key={item.id}
              onClick={() => {
                setSslInfo(item.data);
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className={styles.robList}>
          {robList.map(rob => (
            <div
              className={styles.robItem}
              key={rob.id}
              onClick={() => {
                setSslInfo(rob.data);
              }}
            >
              {rob.title}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.sslInfo}>
        <CapsuleChart config={sslInfo} style={{ height: '180px' }} />
      </div>
    </section>
  );
};

export default Main;
