<!DOCTYPE html>
<html lang="en">
<head><meta name="generator" content="Hexo 3.9.0">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <title>Heartbeats for Bulma</title>

  
     <link rel="shortcut icon" href="/travis-hexo/favicon.ico">
     <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon">
  

  <link rel="stylesheet" href="/travis-hexo/css/bulma.css">
<link rel="stylesheet" href="/travis-hexo/css/main.css">
</head>

<body>
<nav role="navigation" aria-label="main navigation"
     class="navbar is-fixed-top is-dark"
     id="navbar-vue-app">
  <div class="navbar-brand">
    <a class="navbar-item" href="/travis-hexo/">
       <img src="/travis-hexo/images/logo-gear.png" alt="Home">
    </a>
    <a class="navbar-item">
      Blog
    </a>
    
    <a role="button" class="navbar-burger burger" 
       aria-label="menu" aria-expanded="false" data-target="navbarBulma"
       @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBulma" class="navbar-menu"
       v-bind:class="{'is-active': isOpen}">
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Archives
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            By Tags
          </a>
          <a class="navbar-item">
            By Category
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            By Date
          </a>
        </div>
      </div>

      <a class="navbar-item">
        About
      </a>
    </div>

    <div class="navbar-end">
      <form class="is-marginless" method="get"
            action="/travis-hexo/pages/search/">
        <div class="navbar-item">
          <input class="" type="text" name="q"
            placeholder="Search..." aria-label="Search">
          &nbsp;
          <button class="button is-light" 
            type="submit">Search</button>
        </div>
      </form>
    </div>

  </div>
</nav>



  <div class="columns layout-base">
    
  <main role="main" 
        class="column is-two-thirds has-background-primary">
    <article class="blog-post">
      <h1 class="title is-4"></h1>
      

    </article>
  </main>

  <aside class="column is-one-thirds has-background-info">
    <div class="blog-sidebar">
      Side menu
    </div>
  </aside>

  </div>

<footer class="site-footer">
  <div class="navbar is-fixed-bottom maxwidth
        is-dark has-text-centered is-vcentered">
    <div class="column">
      &copy; 2020.
    </div>
  </div>
</footer>

  <!-- JavaScript
  ================================================== -->
  <!-- Placed at the end of the document so the pages load faster -->
  <script src="/travis-hexo/js/vue.min.js"></script>
<script src="/travis-hexo/js/bulma-burger-vue.js"></script>

</body>
</html>

