module.exports = {
  apps : [{
    name: "my-application",
    script: "./App.js",
    instances: "max",
    exec_mode: "cluster",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }],
  deploy : {
    production : {
      user : "node",
      host : "mydomain.local",
      ref  : "origin/main",
      repo : "git@github.com:rnmKeshav/ec2-demo.git",
      path : "/var/www/my-application",
      "post-deploy" : "npm install && pm2 reload ecosystem.config.js --env production"
    },
    dev: {
      user : "node",
      host : "http://localhost:3000/",
      ref  : "origin/main",
      repo : "git@github.com:rnmKeshav/ec2-demo.git",
      path : "/Users/keshavkumar/Documents/practices/ec2-demo/app",
      "post-deploy" : "npm install && pm2 reload ecosystem.config.js"
    }
  }
}
