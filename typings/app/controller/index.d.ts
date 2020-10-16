// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAppWebhook from '../../../app/controller/AppWebhook';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    appWebhook: ExportAppWebhook;
    home: ExportHome;
  }
}
