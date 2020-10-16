// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDtoPgyerWebhookUpdate from '../../../app/model/dto/PgyerWebhookUpdate';

declare module 'egg' {
  interface IModel {
    Dto: {
      PgyerWebhookUpdate: ReturnType<typeof ExportDtoPgyerWebhookUpdate>;
    }
  }
}
