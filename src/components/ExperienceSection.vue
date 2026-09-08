<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCv } from '@/composables/useCv'

const { t } = useI18n()
const cv = useCv()

const INITIAL_COUNT = 3
const expanded = ref(false)

const visibleExperiences = computed(() => {
  return expanded.value ? cv.value.experiences : cv.value.experiences.slice(0, INITIAL_COUNT)
})

const hasMore = cv.value.experiences.length > INITIAL_COUNT
</script>

<template>
  <section id="experience" class="experience section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">{{ t('experience.tag') }}</span>
        <h2 class="section-title">{{ t('experience.title') }}</h2>
      </div>
      <div class="timeline">
        <div v-for="(job, index) in visibleExperiences" :key="index" class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-period">{{ job.period }}</span>
            <h3 class="timeline-title">{{ job.title }}</h3>
            <span class="timeline-company">{{ job.company }}</span>
            <ul class="timeline-list">
              <li v-for="(item, i) in job.description" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="hasMore" class="expand-actions">
        <button class="btn btn-outline" @click="expanded = !expanded">
          {{ expanded ? t('experience.collapse') : t('experience.expand') }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--color-primary), var(--color-secondary));
}

.timeline-item {
  position: relative;
  padding-bottom: 2.5rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--color-primary);
  transform: translateX(-5px);
  box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.2);
}

.timeline-content {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 1.5rem;
  margin-left: 1.5rem;
  transition: border-color 0.2s ease;
}

.timeline-content:hover {
  border-color: var(--color-primary);
}

.timeline-period {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.timeline-company {
  display: block;
  color: var(--color-text-muted);
  font-weight: 500;
  margin-bottom: 1rem;
}

.timeline-list {
  list-style: disc;
  padding-left: 1.25rem;
  color: var(--color-text-muted);
  line-height: 1.7;
}

.timeline-list li {
  margin-bottom: 0.5rem;
}

.expand-actions {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 1.5rem;
  }

  .timeline-marker {
    left: -1.5rem;
  }

  .timeline-content {
    margin-left: 0.75rem;
    padding: 1.25rem;
  }
}
</style>
