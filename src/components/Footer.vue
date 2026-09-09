<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <h2>Grunge University</h2>
        <p>SCIENTIA ET FIDES</p>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.</span>
      </div>

      <div class="footer-column">
        <h3>Important Links</h3>
        <a href="#">About Us</a>
        <a href="#">Academics</a>
        <a href="#">Admissions</a>
        <a href="#">Campus Life</a>
      </div>

      <div class="footer-column">
        <h3>Contact</h3>
        <address>Iloilo City, Philippines</address>
        <a href="tel:+630000000000">+63 000 000 0000</a>
        <a href="mailto:university@example.com">university@example.com</a>
      </div>

      <div class="footer-column">
        <h3>Follow Us</h3>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">YouTube</a>
      </div>
    </div>

    <div class="copyright">© 2026 Grunge University. All Rights Reserved.</div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #111111;
  color: #ffffff;
  padding: 40px 6%;
  font-family: 'Georgia', serif;
  margin-top: 0;
}

.footer-content {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
}

.footer-brand h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 6px;
  color: #ffffff;
}

.footer-brand p {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #f4c542;
  margin-bottom: 14px;
  font-style: italic;
}

.footer-brand span {
  font-size: 14px;
  line-height: 1.6;
  color: #d9d9d9;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-column h3 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #ffffff;
}

.footer-column a,
.footer-column span,
.footer-column address {
  font-size: 14px;
  color: #d9d9d9;
  text-decoration: none;
  font-style: normal;
  transition: color 0.3s ease;
}

.footer-column a:hover {
  color: #f4c542;
  text-decoration: underline;
}

.copyright {
  margin-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  text-align: center;
  padding: 18px 0;
  font-size: 13px;
  color: #d9d9d9;
  font-weight: 500;
}

@media (max-width: 800px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 500px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-column {
    align-items: center;
  }
}
</style>
