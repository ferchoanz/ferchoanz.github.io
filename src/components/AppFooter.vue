<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useCv } from '@/composables/useCv'

const { t } = useI18n()
const cv = useCv()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <p class="footer-copy">
        © {{ new Date().getFullYear() }} {{ cv.personalInfo.name }}. {{ t('footer.rights') }}
      </p>
      <div class="footer-links">
        <a :href="cv.personalInfo.linkedin" target="_blank" rel="noopener">LinkedIn</a>
        <a :href="cv.personalInfo.github" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: 2rem 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-copy {
  color: var(--color-text-muted);
  font-size: 0.875rem;
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--color-primary);
}

@media (max-width: 480px) {
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
