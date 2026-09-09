<script setup></script>

<template>
  <div class="admissions-page">
    <section class="header-section">
      <span class="subtitle">JOIN OUR COMMUNITY</span>
      <h1 class="title">Admissions</h1>
      <div class="underline"></div>
    </section>

    <section class="cards-container">
      <div class="grid">
        <div class="card">
          <div class="icon-wrapper">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h2>Admission Process</h2>
          <ol class="process-list">
            <li>
              <span class="badge">1</span
              ><span>Submit online application form via the student portal.</span>
            </li>
            <li><span class="badge">2</span><span>Take the CPU Placement Examination.</span></li>
            <li>
              <span class="badge">3</span
              ><span>Undergo interview with department heads (if applicable).</span>
            </li>
            <li>
              <span class="badge">4</span><span>Pay enrollment fees and register for classes.</span>
            </li>
          </ol>
          <a href="#" class="card-link">Learn more &rarr;</a>
        </div>

        <div class="card">
          <div class="icon-wrapper">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2>Requirements</h2>
          <ul class="requirements-list">
            <li><span class="check">&#10003;</span> Original Form 138 (Report Card)</li>
            <li><span class="check">&#10003;</span> Certificate of Good Moral Character</li>
            <li><span class="check">&#10003;</span> PSA Birth Certificate (Photocopy)</li>
            <li><span class="check">&#10003;</span> 2&times;2 ID Pictures with white background</li>
            <li><span class="check">&#10003;</span> Transfer Credentials (for Transferees)</li>
          </ul>
          <a href="#" class="card-link">View full checklist &rarr;</a>
        </div>

        <div class="card">
          <div class="icon-wrapper">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
            </svg>
          </div>
          <h2>Programs Offered</h2>
          <p class="description">
            We offer a wide range of programs catering to different educational stages:
          </p>
          <div class="program-buttons">
            <button class="program-btn">Kindergarten &amp; Elementary</button>
            <button class="program-btn">Junior &amp; Senior High School</button>
            <button class="program-btn">Undergraduate Programs</button>
            <button class="program-btn">School of Graduate Studies</button>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>&copy; 2023 Grunge University. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.admissions-page {
  background-color: #f9fafc;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
}

.header-section {
  text-align: center;
  padding-top: 60px;
  padding-bottom: 40px;
}

.subtitle {
  color: #f4c542;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 8px;
}

.title {
  color: #111111;
  font-size: 38px;
  font-weight: 800;
  margin-bottom: 16px;
}

.underline {
  width: 45px;
  height: 2px;
  background-color: #d62828;
  margin: 0 auto;
}

.cards-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px 80px 20px;
  width: 100%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.card {
  background: #ffffff;
  border-radius: 12px;
  padding: 35px 28px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
}

.icon-wrapper {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #f7f4ec;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
}

.icon {
  width: 22px;
  height: 22px;
  color: #111111;
}

.card h2 {
  color: #111111;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 22px;
}

.process-list,
.requirements-list {
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
}

.process-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 13px;
  color: #555555;
  line-height: 1.4;
}

.badge {
  background-color: #d62828;
  color: #ffffff;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
}

.requirements-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
  font-size: 13px;
  color: #555555;
}

.check {
  color: #4caf50;
  font-size: 13px;
  font-weight: bold;
}

.card-link {
  margin-top: auto;
  color: #d62828;
  font-weight: 700;
  font-size: 13px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.2s;
}

.card-link:hover {
  opacity: 0.8;
}

.description {
  font-size: 13px;
  color: #666666;
  line-height: 1.5;
  margin-bottom: 20px;
}

.program-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.program-btn {
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 12px 16px;
  text-align: left;
  font-size: 13px;
  font-weight: 700;
  color: #111111;
  cursor: pointer;
  transition: all 0.2s ease;
}

.program-btn:hover {
  border-color: #d62828;
  background-color: #fff7f7;
}

.footer {
  background-color: #111111;
  color: #ffffff;
  text-align: center;
  padding: 18px 20px;
  font-size: 12px;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .header-section {
    padding-top: 40px;
  }
}
</style>
