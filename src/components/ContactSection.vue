<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useCv } from '@/composables/useCv'

const { t } = useI18n()
const cv = useCv()
</script>

<template>
  <section id="contact" class="contact section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">{{ t('contact.tag') }}</span>
        <h2 class="section-title">{{ t('contact.title') }}</h2>
      </div>
      <div class="contact-grid">
        <div class="contact-info">
          <p>{{ t('contact.description') }}</p>
          <div class="contact-links">
            <a :href="`tel:${cv.personalInfo.phone.replace(/\s/g, '')}`" class="contact-item">
              <span class="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  />
                </svg>
              </span>
              <span>{{ cv.personalInfo.phone }}</span>
            </a>
            <a :href="cv.personalInfo.github" target="_blank" rel="noopener" class="contact-item">
              <span class="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  />
                </svg>
              </span>
              <span>GitHub</span>
            </a>
            <a
              :href="cv.personalInfo.linkedin"
              target="_blank"
              rel="noopener"
              class="contact-item"
            >
              <span class="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </span>
              <span>LinkedIn</span>
            </a>
            <a :href="`mailto:${cv.personalInfo.email}`" class="contact-item">
              <span class="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <span>{{ cv.personalInfo.email }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 700px;
  margin: 0 auto;
}

.contact-info {
  text-align: center;
}

.contact-info p {
  color: var(--color-text-muted);
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1 1 220px;
  min-width: 220px;
  max-width: 100%;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 1rem 1.25rem;
  color: var(--color-text);
  text-decoration: none;
  word-break: break-word;
  overflow-wrap: break-word;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.contact-item:hover {
  transform: translateY(-3px);
  border-color: var(--color-primary);
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 0.75rem;
  background-color: rgba(56, 189, 248, 0.1);
  color: var(--color-primary);
  flex-shrink: 0;
}
</style>
