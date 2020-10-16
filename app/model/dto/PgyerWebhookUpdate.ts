/*
示例：
{
    "action":"应用更新",
    "title":"QQ",
    "link":"https://www.pgyer.com/abcd",
    "message":"您的应用QQ有了新的版本(0.4.0)更新。",
    "type":"updateVersion",
    "os_version":"0.4.0",
    "build_version":"2",
    "created":"2020-07-15 10:50:54",
    "updated":"2020-07-15 10:50:54",
    "timestamp":1594781454,
    "appsize":"26662364",
    "device_type":"iOS",
    "notes":""
}
*/

/**
 * 蒲公英webhook-更新的模型
 */
export default class PgyerWebhookUpdate {
  public action: string;
  public title: string;
  public link: string;
  public message: string;
  public type: string;
  public os_version: string;
  public build_version: string;
  public created: string;
  public updated: string;
  public timestamp: number;
  public appsize: string;
  public device_type: string;
  public notes: string;
}
