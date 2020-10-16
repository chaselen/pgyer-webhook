import { Service } from 'egg';

/**
 * 钉钉服务
 */
export default class DingtalkService extends Service {
  /**
   * 发送text类型消息
   * @param accessToken token
   * @param content 消息内容
   * @param atMobiles 被at人的手机号
   * @param isAtAll 是否at所有人
   */
  public async sendText(
    accessToken: string,
    content: string,
    atMobiles: string[] = [],
    isAtAll = false,
  ): Promise<DingTalkResp> {
    const res = await this.ctx.curl<DingTalkResp>(`https://oapi.dingtalk.com/robot/send?access_token=${accessToken}`, {
      method: 'POST',
      contentType: 'json',
      dataType: 'json',
      data: {
        msgtype: 'text',
        text: {
          content,
        },
        at: {
          atMobiles,
          isAtAll,
        },
      },
    });
    return res.data;
  }
}

class DingTalkResp {
  public errcode: number;
  public errmsg: '';
}
