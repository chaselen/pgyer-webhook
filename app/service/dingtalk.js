'use strict';

const Service = require('egg').Service;

/**
 * 钉钉服务
 */
class DingtalkService extends Service {
  /**
   * 发送text类型消息
   * @param {string} accessToken token
   * @param {string} content 消息内容
   * @param {Array.<string>} atMobiles 被at人的手机号
   * @param {boolean} isAtAll 是否at所有人
   */
  async sendText(accessToken, content, atMobiles = [], isAtAll = false) {
    const res = await this.ctx.curl(`https://oapi.dingtalk.com/robot/send?access_token=${accessToken}`, {
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

module.exports = DingtalkService;
