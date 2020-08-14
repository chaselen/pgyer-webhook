# pgyer-webhook

一个蒲公英 Webhook 服务，实现 APP 上传更新后能发送推送消息到指定的钉钉群。

## 启动服务

```bash
$ npm install --production
$ npm run startd
```

startd 为启动后台服务，关闭后台服务：`npm run stop`

前台启动：`npm run start`

## 配置钉钉机器人

创建一个钉钉机器人，并添加自定义关键词 `更新`。

## 配置蒲公英 Webhook 地址

1. 创建新的 Webhook，要推送的功能勾选 `版本更新`
2. 填写 Webhook URL：`http://your-server.com/appWebhook/update/@dingTalk/{accessToken}`。（accessToken 为钉钉机器人 Webhook 地址中的 token）
