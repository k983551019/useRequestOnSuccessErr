import { request } from 'umi';
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
/** 修改提货地址 POST /api/Booking/TakeDeliveryAddressUpt */
export async function BookingTakeDeliveryAddressUptPOST(
  params: {
    // path
  },
  body: {},
  options?: { [key: string]: any },
) {
  const { ...queryParams } = params;
  return request<CustomerPickupAddress>('/api/Booking/TakeDeliveryAddressUpt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
