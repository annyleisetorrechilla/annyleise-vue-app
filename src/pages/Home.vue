<script setup>
import logo from '../assets/Nirvana-Smiley-Face-Logo-600x600.png'
import SectionHeader from '../components/SectionHeader.vue'
</script>

<template>
  <div class="home-page">
    <section class="hero">
      <div class="left">
        <h4>ESTABLISHED 1905</h4>

        <h1>
          Exemplary <span class="highlight">Christian</span><br />
          Education for Life.
        </h1>

        <div class="divider-line"></div>

        <p>
          A leading Christian institution in the Philippines, Grunge University nurtures
          intellectual growth and spiritual development through a commitment to
          <strong>Scientia et Fides</strong> (Science and Faith).
        </p>

        <div class="buttons">
          <button class="primary">Explore Academics</button>
          <button class="secondary">Request Information</button>
        </div>

        <div class="stats">
          <div class="stat-item">
            <span class="number">118+</span>
            <span class="label">Years of Excellence</span>
          </div>
          <div class="stat-item">
            <span class="number">20+</span>
            <span class="label">Academic Programs</span>
          </div>
          <div class="stat-item">
            <span class="number">5,000+</span>
            <span class="label">Active Students</span>
          </div>
          <div class="stat-item">
            <span class="number">20+</span>
            <span class="label">Partner Institutions</span>
          </div>
        </div>
      </div>

      <div class="right-hero">
        <div class="card">
          <div class="logo-circle">
            <img :src="logo" alt="Grunge University Logo" />
          </div>

          <h2>Grunge University</h2>

          <h3>SCIENTIA ET FIDES</h3>

          <div class="line"></div>

          <p class="quote">"A Heritage of Excellence, A Future of Faith"</p>
        </div>
      </div>
    </section>

    <main class="page-content">
      <section class="section admissions-preview">
        <div class="admissions-heading">
          <span class="admissions-subtitle">JOIN OUR COMMUNITY</span>
          <h2>Admissions</h2>
          <div class="admissions-underline"></div>
        </div>

        <div class="admissions-container">
          <article class="admission-card">
            <div class="icon-wrapper">
              <svg class="admission-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3>Admission Process</h3>
            <ol class="process-list">
              <li><span class="badge">1</span><span>Submit online application form via the student portal.</span></li>
              <li><span class="badge">2</span><span>Take the CPU Placement Examination.</span></li>
              <li><span class="badge">3</span><span>Undergo interview with department heads (if applicable).</span></li>
              <li><span class="badge">4</span><span>Pay enrollment fees and register for classes.</span></li>
            </ol>
            <RouterLink to="/admissions">Learn more →</RouterLink>
          </article>

          <article class="admission-card">
            <div class="icon-wrapper">
              <svg class="admission-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3>Requirements</h3>
            <ul class="requirements-list">
              <li><span class="check">&#10003;</span> Original Form 138 (Report Card)</li>
              <li><span class="check">&#10003;</span> Certificate of Good Moral Character</li>
              <li><span class="check">&#10003;</span> PSA Birth Certificate (Photocopy)</li>
              <li><span class="check">&#10003;</span> 2&times;2 ID Pictures with white background</li>
              <li><span class="check">&#10003;</span> Transfer Credentials (for Transferees)</li>
            </ul>
            <RouterLink to="/admissions">View full checklist →</RouterLink>
          </article>

          <article class="admission-card">
            <div class="icon-wrapper">
              <svg class="admission-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3>Programs Offered</h3>
            <p class="program-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div class="program-buttons">
              <button class="program-btn">Kindergarten &amp; Elementary</button>
              <button class="program-btn">Junior &amp; Senior High School</button>
              <button class="program-btn">Undergraduate Programs</button>
              <button class="program-btn">School of Graduate Studies</button>
            </div>
          </article>
        </div>
      </section>

      <section id="about" class="section alt-bg">
        <SectionHeader title="About Us" />
        <p class="lorem-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>

      <section id="academics" class="section">
        <SectionHeader title="Academics" />
        <p class="lorem-text">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </section>

      <section id="campus" class="section alt-bg">
        <SectionHeader title="Campus Life" />
        <p class="lorem-text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.
        </p>
      </section>

      <section id="news" class="section">
        <SectionHeader title="Latest News" />
        <p class="lorem-text">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet.
        </p>
      </section>
    </main>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 80px 100px;
  background: #f4f4f4;
  min-height: calc(100vh - 120px);
}

.left {
  flex: 1;
  max-width: 600px;
}

h4 {
  color: #f4c542;
  letter-spacing: 2px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
}

h4::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 2px;
  background-color: #f4c542;
}

h1 {
  font-size: 56px;
  color: #111111;
  line-height: 1.1;
  margin-bottom: 25px;
  font-weight: 700;
}

.highlight {
  color: #d62828;
  font-style: italic;
  font-weight: 700;
}

.divider-line {
  width: 32px;
  height: 2px;
  background-color: #f4c542;
  margin-bottom: 25px;
}

.left p {
  color: #333333;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 35px;
  font-weight: 400;
}

.left p strong {
  color: #d62828;
}

.buttons {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}

.primary {
  background: #d62828;
  color: #ffffff;
  border: none;
  padding: 15px 30px;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.primary:hover {
  background: #b91c1c;
}

.secondary {
  background: transparent;
  color: #111111;
  border: 2px solid #111111;
  padding: 15px 30px;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.secondary:hover {
  background: #f4c542;
  color: #111111;
  border-color: #f4c542;
}

.stats {
  display: flex;
  gap: 20px;
  font-weight: 700;
  color: #ffffff;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 0 1px #d9d9d9;
  padding: 20px 30px;
}

.stats > .stat-item {
  flex: 1;
  text-align: center;
  border-right: 1px solid #d9d9d9;
  padding: 0 15px;
}

.stats > .stat-item:last-child {
  border-right: none;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.number {
  font-size: 24px;
  color: #111111;
  margin-bottom: 4px;
}

.label {
  font-size: 14px;
  color: #555555;
}

.right-hero {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  background: #ffffff;
  width: 380px;
  padding: 40px;
  text-align: center;
  border-radius: 24px;
  box-shadow: 0 10px 25px rgba(17, 17, 17, 0.08);
  border: 1px solid #d9d9d9;
  position: relative;
}

.logo-circle {
  background: transparent;
  width: auto;
  height: auto;
  border-radius: 0;
  margin: 0 auto 20px auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.logo-circle img {
  width: 100px;
  height: auto;
}

.card h2 {
  color: #111111;
  font-size: 28px;
  margin-bottom: 10px;
  font-weight: 700;
}

.card h3 {
  color: #f4c542;
  letter-spacing: 3px;
  font-size: 13px;
  margin-bottom: 20px;
  font-weight: 700;
}

.line {
  width: 40px;
  height: 2px;
  background: #d62828;
  margin: 0 auto 20px auto;
  border-radius: 2px;
}

.quote {
  color: #333333;
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
}

.page-content {
  background: #ffffff;
}

.section {
  padding: 60px 100px;
  max-width: 1200px;
  margin: 0 auto;
}

.alt-bg {
  background: linear-gradient(180deg, #f4f4f4 0%, #f9f4df 100%);
}

.lorem-text {
  color: #333333;
  font-size: 16px;
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.admissions-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  max-width: 1100px;
  margin: 0 auto;
}

.admissions-heading {
  margin: 0 auto 45px;
  text-align: center;
}

.admissions-subtitle {
  display: block;
  margin-bottom: 8px;
  color: #f4c542;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
}

.admissions-heading h2 {
  margin-bottom: 16px;
  color: #111111;
  font-size: 38px;
}

.admissions-underline {
  width: 45px;
  height: 2px;
  margin: 0 auto;
  background: #d62828;
}

.admission-card {
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  background: #ffffff;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-bottom: 22px;
  border-radius: 50%;
  background: #f4f4f4;
}

.admission-icon {
  width: 22px;
  height: 22px;
  color: #111111;
}

.admission-card h3 {
  margin-bottom: 15px;
  color: #111111;
}

.admission-card p {
  margin-bottom: 20px;
  color: #555555;
  line-height: 1.7;
}

.admission-card a {
  color: #d62828;
  font-weight: 700;
  text-decoration: none;
}

.process-list,
.requirements-list {
  margin: 0 0 24px;
  padding: 0;
  list-style: none;
}

.process-list li,
.requirements-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 14px;
  color: #555555;
  font-size: 13px;
  line-height: 1.4;
}

.badge {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #d62828;
  color: white;
  font-size: 11px;
  font-weight: 700;
}

.check {
  color: #d62828;
  font-weight: 700;
}

.program-description {
  font-size: 13px;
}

.program-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.program-btn {
  padding: 12px 16px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  background: white;
  color: #111111;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  text-align: left;
}

.program-btn:hover {
  border-color: #d62828;
  background: #fff7f7;
}

@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 50px 30px;
  }

  h4 {
    justify-content: center;
  }

  .divider-line {
    margin: 0 auto 25px auto;
  }

  .left,
  .right-hero {
    width: 100%;
    max-width: 100%;
  }

  .buttons {
    justify-content: center;
    flex-wrap: wrap;
  }

  h1 {
    font-size: 42px;
  }

  .right-hero {
    margin-top: 40px;
  }

  .stats {
    justify-content: center;
    gap: 30px;
  }

  .section {
    padding: 40px 20px;
  }

  .admissions-container {
    grid-template-columns: 1fr;
  }
}
</style>
