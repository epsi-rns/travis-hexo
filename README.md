# Hexo Bulma Test Drive on Travis

An example of Hexo site using Bulma
for personal learning purpose.

> Hexo (EJS) + Bulma

![Hexo Bulma: Tutor][hexo-bulma-preview]

Please refer to original tutorial:

* [Bulma Step by Step Repository][tutorial-bulma]

-- -- --

## Configuration

Since this use github pages, we soot set the `root` as below example:

**_config.yml**

```
# root: /child/
root          : /travis-hexo/
```

**_config_local.yml**

```
# root: /child/
root          : /
```

In local:

```
$ hexo server -p 5000 --debug --config _config.yml,_config_local.yml
```

-- -- --

What do you think ?

[tutorial-bulma]:    https://gitlab.com/epsi-rns/tutor-html-bulma/
[hexo-bulma-preview]:   https://gitlab.com/epsi-rns/tutor-hexo-bulma/raw/master/preview/hexo-bulma-preview.png
