'use strict';

const Controller = require('egg').Controller;

/**
 * App的Webhook控制器
 */
class AppWebHookController extends Controller {
  /**
   * 版本更新
   * {"action":"应用更新","title":"QQ","link":"https://www.pgyer.com/abcd","message":"您的应用QQ有了新的版本(0.4.0)更新。","type":"updateVersion","os_version":"0.4.0","build_version":"2","created":"2020-07-15 10:50:54","updated":"2020-07-15 10:50:54","timestamp":1594781454,"appsize":"26662364","device_type":"iOS","notes":""}
   */
  async update() {
    const { accessToken } = this.ctx.params;
    const req = this.ctx.request.body;
    console.log(`@update请求：\n${JSON.stringify(req)}`);
    if (!accessToken || !req.type || req.type !== 'updateVersion') {
      this.ctx.body = 'do nothing';
      return;
    }

    const pushContent = `应用「${req.title} for ${req.device_type}」有新的版本更新
版本号：${req.os_version} Build：${req.build_version}
下载地址：${req.link}`;
    console.log(`发送钉钉通知：\n${pushContent}`);

    const pushRes = await this.ctx.curl(`https://oapi.dingtalk.com/robot/send?access_token=${accessToken}`, {
      method: 'POST',
      contentType: 'json',
      dataType: 'json',
      data: {
        msgtype: 'text',
        text: {
          content: pushContent,
        },
      },
    });

    this.ctx.body = pushRes.data;
  }
}

module.exports = AppWebHookController;
