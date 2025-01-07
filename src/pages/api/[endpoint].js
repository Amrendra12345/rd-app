import handler from "@/middlewares/middleware";
import { withSessionRoute } from "@/servers/lib-rd/session";
import * as fs from "fs";

handler.post(async (req, res) => {
  const { endpoint } = req.query;
  console.log(req.session, "session");
  let result;
  switch (endpoint) {
    case "productData":
    // result = await getLaptopDetails(req.session, req.body);
    //console.log(result);
  }
  res.json({ name: "endpoint" });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default withSessionRoute(handler);
