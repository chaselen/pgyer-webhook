/**
 * 接口返回包装类型
 */
export default class ApiRes<T = any> {
  public code = 0;
  public msg = '';
  public data?: T;

  constructor(code: number, msg?: string, data?: T) {
    this.code = code;
    this.msg = msg || '';
    this.data = data;
  }

  /**
   * 返回成功的结果
   * @param data 要返回的数据
   */
  public static success<T = any>(data?: T, msg?: string): ApiRes<T> {
    return new ApiRes<T>(0, msg || '', data);
  }

  /**
   * 返回失败的结果
   * @param msg 错误消息
   * @param code 错误代码
   */
  static fail(msg: string, code?: number): ApiRes {
    return new ApiRes(code || -1, msg);
  }
}
