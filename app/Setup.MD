#### Install Node

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

#### Install MySQL

`brew install mysql`

`brew services start mysql`

Setup the password by running following command
`mysql_secure_installation` 

> Sets the password as `password` for MySQL

#### Install PM2

`npm install pm2 -g`


#### Run application

`pm2 start ecosystem.config.js`

