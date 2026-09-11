<script setup>
import { computed, ref } from 'vue'

const units = ref(21)
const paymentTerm = ref('Full payment')
const tuition = computed(() => units.value * 650)
const laboratory = computed(() => units.value * 150)
const miscellaneous = computed(() => tuition.value * 0.08)
const total = computed(() => tuition.value + laboratory.value + miscellaneous.value + 3000)
const formatCurrency = (amount) => `₱${Math.round(amount).toLocaleString('en-US')}`
</script>

<template>
  <div class="page">
    <header class="hero">
      <div class="container">
        <p class="eyebrow">Admissions</p>
        <h1>Apply, Estimate, Enroll</h1>
        <p class="lead">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto recusandae, nostrum
          cum maiores molestiae sed totam quam qui tempora placeat odio praesentium consequuntur
          enim nemo incidunt, voluptatum minus rerum ex!
        </p>
      </div>
    </header>

    <main class="container main">
      <section class="card">
        <h2>Admission Requirements</h2>
        <div class="requirements-grid">
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
      </section>

      <section class="card">
        <h2>Tuition Fee Calculator</h2>
        <p class="muted">
          Select your program and units to estimate your fees for one semester. This is an estimate
          only - final assessment is issued by the Registrar's Office.
        </p>

        <div class="form-grid">
          <label class="field">
            <span>Program</span>
            <select>
              <option>BS Computer Science</option>
              <option>BS Information Technology</option>
              <option>BS Business Administration</option>
              <option>BS Education</option>
              <option>BS Nursing</option>
            </select>
          </label>
          <label class="field">
            <span>Year Level</span>
            <select>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </label>
          <label class="field">
            <span>Units this semester: {{ units }}</span>
            <input v-model.number="units" type="range" min="12" max="27" />
            <div class="range-labels"><span>12</span><span>27</span></div>
          </label>
        </div>

        <div class="field payment-terms">
          <span>Payment terms</span>
          <div class="button-group">
            <button
              v-for="term in ['Full payment', '3 installments', '5 installments']"
              :key="term"
              type="button"
              class="pill"
              :class="{ active: paymentTerm === term }"
              @click="paymentTerm = term"
            >
              {{ term }}
            </button>
          </div>
        </div>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th class="align-left">Schedule of Fees</th>
                <th class="align-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tuition Fee ({{ units }} units × ₱650)</td>
                <td class="align-right">{{ formatCurrency(tuition) }}</td>
              </tr>
              <tr>
                <td>Laboratory Fee ({{ units }} units × ₱150)</td>
                <td class="align-right">{{ formatCurrency(laboratory) }}</td>
              </tr>
              <tr>
                <td>Miscellaneous Fee (8% of tuition)</td>
                <td class="align-right">{{ formatCurrency(miscellaneous) }}</td>
              </tr>
              <tr
                v-for="fee in [
                  ['Registration Fee', 750],
                  ['Library Fee', 500],
                  ['Athletic Fee', 350],
                  ['Medical & Dental Fee', 400],
                  ['Guidance & Testing Fee', 300],
                  ['ID & Insurance Fee', 450],
                  ['Student Organization Fee', 250],
                ]"
                :key="fee[0]"
                class="muted-row"
              >
                <td>{{ fee[0] }}</td>
                <td class="align-right">{{ formatCurrency(fee[1]) }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="total-row">
                <td>Total Assessment ({{ paymentTerm }})</td>
                <td class="align-right">{{ formatCurrency(total) }}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <p class="fine-print">
          * Rates shown are sample figures for demonstration purposes. Replace with your
          institution's actual schedule of fees.
        </p>
      </section>

      <section class="cta">
        <button type="button" class="primary-btn">Start Your Application</button>
      </section>
    </main>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.page {
  min-height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
}
.hero {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  padding: 40px 0;
}
.eyebrow {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent);
  margin: 0 0 8px;
}
.hero h1 {
  font-size: 32px;
  margin: 0 0 12px;
}
.lead {
  max-width: 640px;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
}
.main {
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.card {
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px;
}
.card h2 {
  font-size: 20px;
  margin: 0 0 16px;
}
.muted {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0 0 24px;
}
.requirements-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  font-size: 14px;
}
.requirements-grid ul {
  margin: 0;
  padding-left: 20px;
  color: var(--text-secondary);
  line-height: 1.8;
}
.form-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}
.field {
  display: block;
  font-size: 14px;
}
.field > span {
  display: block;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 6px;
}
select {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 14px;
}
input[type='range'] {
  width: 100%;
  margin-top: 12px;
}
.range-labels {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 4px;
}
.payment-terms {
  margin-bottom: 24px;
}
.button-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.pill {
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 14px;
  border: 1px solid var(--border);
  background-color: var(--bg-secondary);
  color: var(--text-secondary);
  cursor: pointer;
}
.pill.active {
  background-color: var(--accent);
  border-color: var(--accent);
  color: var(--bg-primary);
}
.table-wrap {
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow-x: auto;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  min-width: 530px;
}
thead {
  background-color: var(--bg-secondary);
  color: var(--accent);
  text-transform: uppercase;
  font-size: 12px;
}
th,
td {
  padding: 10px 16px;
  text-align: left;
}
.align-right {
  text-align: right;
}
.align-left {
  text-align: left;
}
tbody tr {
  border-top: 1px solid var(--border);
}
.muted-row {
  color: var(--text-secondary);
}
.total-row {
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border);
  font-weight: 700;
}
.fine-print {
  font-size: 12px;
  color: var(--text-secondary);
  margin: 16px 0 0;
}
.cta {
  text-align: center;
  padding: 24px 0;
}
.primary-btn {
  background-color: var(--accent);
  color: var(--bg-primary);
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}
.primary-btn:hover {
  background-color: var(--accent-hover);
}
@media (max-width: 640px) {
  .form-grid,
  .requirements-grid {
    grid-template-columns: 1fr;
  }
}
</style>
