# PHPHP
Password Hasher for PHP Hypertext Preprocessor

![Screenshot](screenshot.png)

## About
When writing PHP applications that store passwords, there will be times where
you need a salted password hash that is compatible with `password_verfiy`.
Without the command line, there was no easy way to do this.

Until now.

## Installation
PHPHP is written using the CodeIgniter framework. If you've ever used it before,
this process might seem familiar:

1. Download PHPHP and extract it to a temporary location on your computer
2. Change the base URL in `application/config/config.php` to the location of
   your install online, such as `http://example.com/phphp`
3. Upload the altered files to your server

## Usage
1. Navigate to the PHPHP homepage using your browser
2. Type your plain-text password into the field 
3. Copy your brand-new password hash to your clipboard using the button
