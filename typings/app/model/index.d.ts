// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApiRes from '../../../app/model/ApiRes';
import ExportDtoPgyerWebhookUpdate from '../../../app/model/dto/PgyerWebhookUpdate';

declare module 'egg' {
  interface IModel {
    ApiRes: ReturnType<typeof ExportApiRes>;
    Dto: {
      PgyerWebhookUpdate: ReturnType<typeof ExportDtoPgyerWebhookUpdate>;
    }
  }
}
