import { Controller } from 'egg';
import ApiRes from '../model/ApiRes';
import PgyerWebhookUpdate from '../model/dto/PgyerWebhookUpdate';

/**
 * App的Webhook控制器
 */
export default class AppWebhookController extends Controller {
  /**
   * 版本更新
   */
  public async update() {
    const { accessToken } = this.ctx.params;
    const req = this.ctx.request.body as PgyerWebhookUpdate;
    console.log(`@update请求：\n${JSON.stringify(req)}`);
    if (!accessToken || !req.type || req.type !== 'updateVersion') {
      this.ctx.body = ApiRes.success(null, 'do nothing');
    }

    const pushContent = `应用「${req.title} for ${req.device_type}」有新的版本更新
版本号：${req.os_version} Build：${req.build_version}
下载地址：${req.link}`;
    console.log(`发送钉钉通知：\n${pushContent}`);
    const res = await this.ctx.service.dingtalk.sendText(accessToken, pushContent);

    this.ctx.body = new ApiRes(res.errcode, res.errmsg, req);
  }
}
