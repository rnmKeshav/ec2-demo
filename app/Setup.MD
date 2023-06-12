#### Install Node

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

#### Install MySQL

`brew install mysql`

`brew services start mysql`



Setup the password by running following command
`mysql_secure_installation` 

> Sets the password as `password` for MySQL


#### Install MySql/MariaDB on EC2

We need to install mariadb on EC2. 

Step 1: Find available versions of mariaDB
`yum list | grep -i maria`

Step 2: 
`sudo yum install -y mariadb105-server` 

Step 3: This command enables the service created in previous step
`sudo systemctl enable mariadb`

Step 4: This command starts the MySQL server service on your Linux instance
`sudo systemctl start mariadb`

Step 5: This command helps you to set root user password and improve your DB security
`sudo mysql_secure_installation`

Step 6: Connect to database
`mysql -h mysqlrds.chha0g9u8v4.ap-south-1.rds.amazonaws.com -u root -p`

#### Install PM2

`npm install pm2 -g`


#### Run application

`pm2 start ecosystem.config.js`

