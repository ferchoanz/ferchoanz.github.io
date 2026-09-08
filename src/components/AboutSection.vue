<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useCv } from '@/composables/useCv'

const { t } = useI18n()
const cv = useCv()
</script>

<template>
  <section id="about" class="about section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">{{ t('about.tag') }}</span>
        <h2 class="section-title">{{ t('about.title') }}</h2>
      </div>
      <div class="about-grid">
        <div class="about-text">
          <p>{{ cv.personalInfo.about }}</p>
          <p>{{ t('about.extra') }}</p>
        </div>
        <div class="about-stats">
          <div class="stat">
            <span class="stat-number">10+</span>
            <span class="stat-label">{{ t('about.stats.experience') }}</span>
          </div>
          <div class="stat">
            <span class="stat-number">12</span>
            <span class="stat-label">{{ t('about.stats.companies') }}</span>
          </div>
          <div class="stat">
            <span class="stat-number">Full</span>
            <span class="stat-label">{{ t('about.stats.role') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-text p {
  color: var(--color-text-muted);
  font-size: 1.125rem;
  line-height: 1.8;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.stat {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.stat:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-stats {
    grid-template-columns: 1fr;
  }
}
</style>
