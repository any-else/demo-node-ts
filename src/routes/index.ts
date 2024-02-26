import { Express } from "express";
import { noteRoute } from "./note.route";
/** LÀ NƠI CHỨA TOÀN BỘ ĐƯỜNG DẪN API CỦA MÌNH */

export const rootRoute = (app: Express) => {
  noteRoute(app);
};
