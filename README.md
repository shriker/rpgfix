# RPGfix

## Server Requirements

* Apache (with mod_rewrite enabled) or Nginx
* PHP 7.1+ with the following extensions: curl, dom, gd, json, mbstring, openssl, pdo_mysql, tokenizer, zip
* MySQL 5.6+ or MariaDB 10.0.5+
* SSH (command-line) access to run [Composer](https://getcomposer.org/)

### Local PHP Server

```bash
cd rpgfix-flarum/public
php -S 127.0.0.1:8000
```

## Installing

```bash
composer install
php flarum migrate
```

## Updating

```bash
composer update
php flarum migrate
php flarum cache:clear
```
