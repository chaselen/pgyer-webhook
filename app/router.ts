import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.post('/appWebhook/update/@dingTalk/:accessToken', controller.appWebhook.update);
};
