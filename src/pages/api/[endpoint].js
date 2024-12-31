import handler from "@/middlewares/middleware";
import { withSessionRoute } from "@/servers/lib-rd/session";
import * as fs from "fs";

handler.post(async (req, res) => {
  const { endpoint } = req.query;
  let result;
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default withSessionRoute(handler);
