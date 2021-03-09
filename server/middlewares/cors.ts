import cors from "cors";
import colors from "colors";

const allowedOrigins = [
  "http://idc-test.changsoft.co.kr",
  "https://idc-test.changsoft.co.kr",
  "http://idc.changsoft.co.kr",
  "https://idc.changsoft.co.kr",
  "http://idcapi-test.changsoft.co.kr",
  "https://idcapi-test.changsoft.co.kr",
  "http://idcapi.changsoft.co.kr",
  "https://idcapi.changsoft.co.kr",
];

const corsMiddleware = () =>
  cors({
    origin: (origin, callback) => {
      callback(null, true);
    },
    credentials: true,
  });

export default corsMiddleware;
