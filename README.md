# pgyer-webhook

一个蒲公英 Webhook 服务，实现 APP 上传更新后能发送推送消息到指定的钉钉群。

## 快速开始

### 开发

```bash
$ npm install
$ npm run dev
$ open http://localhost:7001/
```

不要在开发模式进行 tsc 编译，如果你已经运行了 `tsc`，需要在 `npm run dev` 前执行 `npm run clean`。

### 部署

```bash
$ npm install
$ npm run tsc
$ npm run start
```

前台启动：`npm run start`
后台启动：`npm run startd`
关闭后台服务：`npm run stop`

### Npm 命令

- 使用 `npm run lint` 检查代码风格
- 使用 `npm test` 运行单元测试
- 使用 `npm run clean` 清理已编译的 js（用于开发模式）

## 配置钉钉机器人

创建一个钉钉机器人，并添加自定义关键词 `更新`。

## 配置蒲公英 Webhook 地址

1. 创建新的 Webhook，要推送的功能勾选 `版本更新`
2. 填写 Webhook URL：`http://your-server.com/appWebhook/update/@dingTalk/{accessToken}`。（accessToken 为钉钉机器人 Webhook 地址中的 token）

## 要求

- Node.js 8.x
- Typescript 2.8+
