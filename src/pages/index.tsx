import React from 'react';
import { Link, useRequest } from 'umi';
import { Button, DatePicker } from 'antd';
import { BookingTakeDeliveryAddressUptPOST } from '@/services/Booking';
import styles from './index.less';

type CustomerPickupAddress = {
  Id?: number;
  CreationTime?: string;
  CreatorUserId?: number;
  /** 创建人公司id */
  CustomerId?: number;
  /** 地址 */
  Addressee?: string;
  /** 联系人 */
  Contact?: string;
  /** 联系人电话 */
  Tel?: string;
  /** 联系人手机 */
  Mobile?: string;
  /** 是否默认 1是  0否 */
  Is_Use?: number;
  /** 省 */
  ProvinceId?: number;
  /** 市 */
  CityId?: number;
  /** 区 */
  ChinaAreaId?: number;
  /** 是否删除  0 否   1是 */
  is_deleted?: number;
};
export default function IndexPage() {
  const 大时代 = useRequest(BookingTakeDeliveryAddressUptPOST, {
    manual: true,
    onSuccess: (data: CustomerPickupAddress) => { },
  });
  return (
    <div className={styles.container}>
      <p>Hello Umi</p>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
      <div>
        <Link to="/about">goto about</Link>
      </div>
    </div>
  );
}
