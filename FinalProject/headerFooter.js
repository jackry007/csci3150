document.addEventListener("DOMContentLoaded", () => {
  // Inject Unified Header
  document.querySelector("#header").innerHTML = `
    <header class="site-header">
      <div class="header-container">
        <!-- Left: Logo + Page Heading -->
        <div class="logo-heading-group">
          <a href="home.html">
            <img class="logo" src="logo.svg" alt="City of Boulder logo" />
          </a>
          <div class="page-heading">
            <div class="breadcrumb"><a href="home.html">Home</a></div>
            <h1>Events</h1>
          </div>
        </div>

        <!-- Right: Menu Toggle + Nav -->
        <div class="nav-groups">
          <button class="menu-toggle" aria-expanded="false" aria-label="Toggle menu">☰ Menu</button>
          
          <nav class="utility-nav" aria-label="Utility Navigation">
            <ul>
              <li><a href="#">Calendar</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Contact Us</a></li>
              <li>
                <a href="#"><span aria-hidden="true">🔍</span>
                <span class="sr-only">Search</span></a>
              </li>
            </ul>
          </nav>

          <nav class="main-nav" aria-label="Main Navigation">
            <ul>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Government</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  `;

  // Inject Footer
  document.querySelector("#footer").innerHTML = `
    <footer class="site-footer">
      <div class="footer-top">
        <div>
          <h4>Explore</h4>
          <a href="#">Calendar</a>
          <a href="#">Government</a>
          <a href="#">News</a>
        </div>
        <div>
          <h4>City Info</h4>
          <a href="#">City Accessibility</a>
          <a href="#">Locations</a>
          <a href="#">Services</a>
        </div>
        <div>
          <h4>Contact</h4>
          <address>
            1777 Broadway<br>
            Boulder, CO 80302<br>
            <a href="#">Contact</a>
          </address>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div class="social-icons">
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Nextdoor">🧭</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>
          &copy; 2025 <strong>City of Boulder</strong>. All Rights Reserved.
          <a href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
  `;

  // ===== Mobile Menu Toggle =====
  const toggle = document.querySelector(".menu-toggle");
  const navGroups = document.querySelector(".nav-groups");

  toggle.addEventListener("click", () => {
    navGroups.classList.toggle("nav-open");
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !expanded);
  });
});
