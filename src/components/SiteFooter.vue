<template>
  <footer class="site-footer">
    <div class="container footer-row">
      <div class="footer-left">
        <RouterLink to="/" title="Return to homepage">Home</RouterLink>
      </div>

      <div class="footer-center">
        <RouterLink
          to="/"
          class="footer-logo-link"
          title="Return to homepage"
          aria-label="Home"
        >
          <img
            src="/alien.svg"
            alt="Joe O'Regan Games logo"
            class="footer-logo"
          />
        </RouterLink>
        <div class="copyright">©{{ year }} Joe O'Regan</div>
      </div>

      <div class="footer-right">
        <a
          href="https://www.linkedin.com/in/joeaoregan/"
          target="_blank"
          rel="noopener"
          title="LinkedIn"
          ><i class="fa-brands fa-linkedin-in"></i
        ></a>
        <a
          href="https://github.com/JoeORegan"
          target="_blank"
          rel="noopener"
          title="GitHub"
          ><i class="fa-brands fa-github"></i
        ></a>
        <a
          href="https://www.youtube.com/@joe_oregan"
          target="_blank"
          rel="noopener"
          title="YouTube"
          ><i class="fa-brands fa-youtube"></i
        ></a>
        <a
          href="https://sketchfab.com/joeoregan"
          target="_blank"
          rel="noopener"
          title="Sketchfab"
          ><i class="fa-solid fa-cube"></i
        ></a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
