# Hexo Bulma Test Drive on Travis

An example of Hexo site using Bulma
for personal learning purpose.

> Hexo (EJS) + Bulma

![Hexo Bulma: Tutor][hexo-bulma-preview]

Please refer to original tutorial:

* [Bulma Step by Step Repository][tutorial-bulma]

-- -- --

### Running Locally

Since this use github pages, we should set the `root` as below example

This travis example has **_config.yml** as below

```
root          : /travis-hexo/
```

And has **_config_local.yml** as below

```
root          : /
```

To run locally you can override use this command.

```
hexo server -p 5000 --debug --config _config.yml,_config_local.yml
```

-- -- --

What do you think ?

[tutorial-bulma]:    https://gitlab.com/epsi-rns/tutor-html-bulma/
[hexo-bulma-preview]:   https://gitlab.com/epsi-rns/tutor-hexo-bulma/raw/master/preview/hexo-bulma-preview.png
