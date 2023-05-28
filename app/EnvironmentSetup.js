const env = require('dotenv');

const setupEnvironment = () => {
  let envPath = ".env.development";

  if (!!process.env.NODE_ENV) {
    envPath = `.env.${process.env.NODE_ENV}`;
  }

  env.config({ path: envPath });
}

setupEnvironment();
