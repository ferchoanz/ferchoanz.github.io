<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useCv } from '@/composables/useCv'

const { t } = useI18n()
const cv = useCv()
</script>

<template>
  <section id="skills" class="skills section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">{{ t('skills.tag') }}</span>
        <h2 class="section-title">{{ t('skills.title') }}</h2>
      </div>

      <div class="skills-grid">
        <div v-for="category in cv.skillCategories" :key="category.name" class="skill-card">
          <h3 class="skill-category">{{ category.name }}</h3>
          <div class="skill-tags">
            <span v-for="skill in category.skills" :key="skill" class="skill-tag">{{ skill }}</span>
          </div>
        </div>
      </div>

      <div class="skills-extra">
        <div class="extra-card">
          <h3>{{ t('skills.soft') }}</h3>
          <div class="skill-tags">
            <span v-for="skill in cv.softSkills" :key="skill" class="skill-tag soft">{{ skill }}</span>
          </div>
        </div>
        <div class="extra-card">
          <h3>{{ t('skills.languages') }}</h3>
          <ul class="language-list">
            <li v-for="lang in cv.languages" :key="lang.name">
              <span class="language-name">{{ lang.name }}</span>
              <span class="language-level">{{ lang.level }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.skill-card,
.extra-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.skill-card:hover,
.extra-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
}

.skill-category {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background-color: rgba(56, 189, 248, 0.1);
  color: var(--color-primary);
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.skill-tag.soft {
  background-color: rgba(139, 92, 246, 0.1);
  color: var(--color-secondary);
}

.skills-extra {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.extra-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-secondary);
}

.language-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.language-list li {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-border);
}

.language-list li:last-child {
  border-bottom: none;
}

.language-name {
  font-weight: 600;
}

.language-level {
  color: var(--color-text-muted);
  font-size: 0.875rem;
}
</style>
