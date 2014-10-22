oauthd request
==============

This is the default request plugin for oauthd. oauthd is the open source version of OAuth.io's core, allowing you to easily integrate over 100 different OAuth providers, and use their APIs.

This plugin adds the `/request/:provider/:request` endpoint, which proxies an API request to the requested provider.

For more information, please check out [oauthd's repository](https://github.com/oauth-io/oauthd).

Installation
------------

To install this plugin in an oauthd instance, just run the following command (you need to have oauthd installed):

```sh
$ oauthd plugins install https://github.com/oauth-io/oauthd-request.git
```

If you want to install a specific version or branch of this plugin, just run:

```sh
$ oauthd plugins install https://github.com/oauth-io/oauthd-request.git#branch_or_tag
```