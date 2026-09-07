<script setup lang="ts">
import { education } from '@/data/cv'
</script>

<template>
  <section id="education" class="education section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Educación</span>
        <h2 class="section-title">Formación académica</h2>
      </div>
      <div class="education-grid">
        <div v-for="(item, index) in education" :key="index" class="education-card">
          <div class="education-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div class="education-info">
            <span class="education-period">{{ item.period }}</span>
            <h3 class="education-degree">{{ item.degree }}</h3>
            <span class="education-institution">{{ item.institution }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.education-card {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.education-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
}

.education-icon {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 1rem;
  background-color: rgba(56, 189, 248, 0.1);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.education-period {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.education-degree {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.education-institution {
  color: var(--color-text-muted);
}

@media (max-width: 480px) {
  .education-card {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
