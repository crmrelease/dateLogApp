// https://github.com/expressjs/cors#configuration-options
import cors from 'cors';

const allowedOrigins = [
  'http://localhost:3200',
  'http://blessyou.jongbeom.com/',
  'http://blessyou-test.jongbeom.com/',
  'http://blessyou.jongbeom.com',
  'http://blessyou-test.jongbeom.com',
  'https://blessyou.jongbeom.com/',
  'https://blessyou-test.jongbeom.com/',
  'https://blessyou.jongbeom.com',
  'https://blessyou-test.jongbeom.com',
];

const corsMiddleware = () =>
  cors({
    // origin: '*', // credentials include인경우 사용불가
    // origin: allowedOrigins,
    origin: (origin, callback) => {
      // console.log('request origin: ' + origin);

      // !origin: server-to-server 통신, REST tool의 경우 origin이 undefined 임
      if (allowedOrigins.includes(origin || '') || !origin) {
        callback(null, true);
      } else {
        // callback(new Error('Not allowed by CORS'));
        callback(null, true);
      }
    },
    // preflightContinue: true,
    credentials: true, // Access-Control-Allow-Credentials CORS header
    // methods: ['GET', 'PUT', 'POST'], // Access-Control-Allow-Methods CORS header
    // allowedHeaders: ['Content-Type', 'Authorization'], //Access-Control-Allow-Headers CORS header
    // exposedHeaders: ['Content-Range', 'X-Content-Range'], //Access-Control-Expose-Headers CORS header
    // optionsSuccessStatus: 204,
  });

export default corsMiddleware;
