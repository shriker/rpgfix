# RPGfix Flarum 🔥

Working repository for RPGfix's Flarum installation. Guaranteed to be unstable. Use at your own peril.

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
git clone --recurse-submodules https://github.com/shriker/rpgfix-flarum.git
cd rpgfix-flarum
composer install
php flarum migrate
```

## Updating

```bash
git submodule update --init --recursive
composer update --prefer-dist --no-dev -a --with-all-dependencies
php flarum migrate
php flarum cache:clear
```
