import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';
import ApiRes from '../../../app/model/ApiRes';

const testDingTalkAccToken = 'a174278e12a1980d442535a2367ff57e44477b6658c9d4d7dc3bae8a88dfd416';

describe('test/app/controller/AppWebhook.test.ts', () => {
  it('should GET /appWebhook/update/@dingTalk/:accessToken', async () => {
    const body = `{
        "action": "应用更新",
        "title": "AppDemo",
        "link": "https://www.pgyer.com/abcd",
        "message": "您的应用居xxx有了新的版本(0.4.0)更新。",
        "type": "updateVersion",
        "os_version": "0.4.0",
        "build_version": "2",
        "created": "2019-11-15 10:50:54",
        "updated": "2019-11-15 10:50:54",
        "timestamp": 1573786255,
        "appsize": "26662364",
        "device_type": "iOS",
        "notes": ""
    }`;
    const result = await app
      .httpRequest()
      .post(`/appWebhook/update/@dingTalk/${testDingTalkAccToken}`)
      .send(JSON.parse(body))
      .expect(200);
    assert((<ApiRes>result.body).code === 0);
  });
});
