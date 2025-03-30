import axios from "axios";
import {
  config_urlencoded,
  INVALID_TOKEN_TEXT,
  TOKEN_REQUIRED_TEXT,
} from "./contants";
import { createResponse } from "./helpers";

export const getAccessToken = async (session) => {
  try {
    const res = await axios.post(
      process.env.RAPI_BASE_URL + "/authorize/get-token",
      {
        grant_type: process.env.WEB_GRANT_TYPE,
        client_id: process.env.WEB_CLIENT_ID,
        client_secret: process.env.WEB_CLIENT_SECRET,
      },
      config_urlencoded
    );

    session.ACCESS_TOKEN = res.data.token.access_token;
    await session.save();

    return createResponse(true, 200, "", {
      token: res.data.token.access_token,
    });
  } catch (err) {
    if (!err.response) {
      return createResponse(false, 500, "Network Error", {
        message: "Network Error",
      });
    }
    return createResponse(
      false,
      err.response.status,
      err.response.data.message,
      err.response.data
    );
  }
};

export const searchFamily = async (session, data) => {
  try {
    const res = await axios.post(
      process.env.RAPI_BASE_URL + "/search-family",
      {
        access_token: session.ACCESS_TOKEN,
        client: "web",
        city: data.city ?? process.env.DEFAULT_CITY,
        search_key: data.search_key,
      },
      config_urlencoded
    );
    return createResponse(true, 200, "", res.data);
  } catch (err) {
    return await errorHandler(searchFamily, session, data, err);
  }
};
export const getCommonData = async (req, post_data = []) => {
  let data = post_data;
  if (!req.session.FOOTER)
    data = [
      ...data,
      {
        data_name: "view-footer",
      },
    ];
  if (isMetaRequired(req.url)) {
    data = [
      ...data,
      {
        data_name: "view-meta",
        url: req.url,
      },
    ];
  }
  const result = await getPageData(data);
  if (result.success) {
    if (result.data.footer) req.session.FOOTER = result.data.footer;
    else
      result.data = {
        ...result.data,
        footer: req.session.FOOTER,
      };
    await req.session.save();
  }
  return result;
};
export const isMetaRequired = (url) => {
  const url_segs = url.split("/");
  console.log("meta required", url_segs[1], "meta required");
  if (url_segs[1] != "_next") return true;
  return false;
};
export const getPageData = async (data) => {
  try {
    const res = await axios.post(
      process.env.RAPI_BASE_URL + "/get-page-data",
      {
        data: JSON.stringify(data),
      },
      config_urlencoded
    );
    return createResponse(true, 200, "", res.data);
  } catch (err) {
    return await errorHandler(getPageData, null, data, err);
  }
};

export const errorHandler = async (caller, session, data, err) => {
  if (!err.response) {
    return createResponse(false, 500, "Network Error", {
      message: "Network Error",
    });
  }
  if (
    err.response.status == 401 ||
    err.response.data.message == INVALID_TOKEN_TEXT ||
    err.response.data.message == TOKEN_REQUIRED_TEXT
  ) {
    if (session) {
      await getAccessToken(session);
      return await caller(session, data);
    } else {
      return await caller(data);
    }
  }
  return createResponse(
    false,
    err.response.status,
    err.response.data.message,
    err.response.data
  );
};
