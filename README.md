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

For additional security, ensure that only the `public` folder can be seen online.

## Usage
1. Navigate to the PHPHP homepage using your browser
2. Type your plain-text password into the field 
3. Copy your brand-new password hash to your clipboard using the button

## License

```
MIT License

Copyright (c) 2018 Callum John

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
