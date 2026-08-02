window.SiteFooter = {
  name: "SiteFooter",
  template: `
    <footer class="site-footer">
      <div class="container footer-row">
        <div class="footer-left">
          <a href="./index.html" title="Return to homepage">Home</a>
        </div>

        <div class="footer-center">
          <a href="./index.html" class="footer-logo-link" title="Return to homepage" aria-label="Home">
            <svg class="footer-logo" viewBox="0 0 462 336" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <g fill="currentColor">
                <rect x="84" width="42" height="42"/><rect x="126" y="42" width="42" height="42"/><rect x="84" y="84" width="42" height="42"/>
                <rect x="42" y="126" width="42" height="42"/><rect y="84" width="42" height="42"/><rect y="42" width="42" height="42"/>
                <rect y="126" width="42" height="42"/><rect x="42" y="168" width="42" height="42"/><rect y="168" width="42" height="42"/>
                <rect x="42" y="210" width="42" height="42"/><rect x="84" y="126" width="42" height="42"/><rect x="84" y="168" width="42" height="42"/>
                <rect x="84" y="210" width="42" height="42"/><rect x="84" y="252" width="42" height="42"/><rect x="42" y="294" width="42" height="42"/>
                <rect x="126" y="84" width="42" height="42"/><rect x="168" y="84" width="42" height="42"/><rect x="210" y="84" width="42" height="42"/>
                <rect x="252" y="84" width="42" height="42"/><rect x="294" y="42" width="42" height="42"/><rect x="336" width="42" height="42"/>
                <rect x="294" y="84" width="42" height="42"/><rect x="336" y="84" width="42" height="42"/><rect x="420" y="84" width="42" height="42"/>
                <rect x="420" y="42" width="42" height="42"/><rect x="420" y="126" width="42" height="42"/><rect x="420" y="168" width="42" height="42"/>
                <rect x="336" y="126" width="42" height="42"/><rect x="336" y="168" width="42" height="42"/><rect x="336" y="210" width="42" height="42"/>
                <rect x="378" y="126" width="42" height="42"/><rect x="378" y="168" width="42" height="42"/><rect x="378" y="210" width="42" height="42"/>
                <rect x="336" y="252" width="42" height="42"/><rect x="378" y="294" width="42" height="42"/><rect x="126" y="210" width="42" height="42"/>
                <rect x="168" y="210" width="42" height="42"/><rect x="210" y="210" width="42" height="42"/><rect x="252" y="210" width="42" height="42"/>
                <rect x="294" y="210" width="42" height="42"/><rect x="126" y="168" width="42" height="42"/><rect x="168" y="168" width="42" height="42"/>
                <rect x="210" y="168" width="42" height="42"/><rect x="252" y="168" width="42" height="42"/><rect x="294" y="168" width="42" height="42"/>
                <rect x="168" y="126" width="42" height="42"/><rect x="210" y="126" width="42" height="42"/><rect x="252" y="126" width="42" height="42"/>
              </g>
            </svg>
          </a>
          <div class="copyright">©{{ year }} Joe O'Regan</div>
        </div>

        <div class="footer-right">
          <a href="https://www.linkedin.com/in/joeaoregan/" target="_blank" rel="noopener" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://github.com/JoeORegan" target="_blank" rel="noopener" title="GitHub"><i class="fa-brands fa-github"></i></a>
          <a href="https://www.youtube.com/@joe_oregan" target="_blank" rel="noopener" title="YouTube"><i class="fa-brands fa-youtube"></i></a>
          <a href="https://sketchfab.com/joeoregan" target="_blank" rel="noopener" title="Sketchfab"><i class="fa-solid fa-cube"></i></a>
        </div>
      </div>
    </footer>
  `,
  computed: {
    year() { return new Date().getFullYear(); }
  }
};