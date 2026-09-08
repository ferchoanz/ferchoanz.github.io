<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Locale } from '@/i18n'

const { t, locale } = useI18n()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const navLinks = computed(() => [
  { label: t('nav.home'), href: '#home' },
  { label: t('nav.about'), href: '#about' },
  { label: t('nav.experience'), href: '#experience' },
  { label: t('nav.skills'), href: '#skills' },
  { label: t('nav.education'), href: '#education' },
  { label: t('nav.contact'), href: '#contact' },
])

const languages: { label: string; value: Locale }[] = [
  { label: 'ES', value: 'es' },
  { label: 'EN', value: 'en' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function closeMenu() {
  mobileMenuOpen.value = false
}

function setLanguage(lang: Locale) {
  locale.value = lang
  localStorage.setItem('preferred-lang', lang)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container navbar-inner">
      <a href="#home" class="logo">Ferchoanz</a>

      <div class="nav-right">
        <button
          class="mobile-toggle"
          aria-label="Abrir menú"
          :aria-expanded="mobileMenuOpen"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <span :class="{ open: mobileMenuOpen }"></span>
          <span :class="{ open: mobileMenuOpen }"></span>
          <span :class="{ open: mobileMenuOpen }"></span>
        </button>

        <ul class="nav-links" :class="{ open: mobileMenuOpen }">
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href" @click="closeMenu">{{ link.label }}</a>
          </li>
        </ul>

        <div class="language-switcher">
          <button
            v-for="lang in languages"
            :key="lang.value"
            class="lang-btn"
            :class="{ active: locale === lang.value }"
            @click="setLanguage(lang.value)"
          >
            {{ lang.label }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 0;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.navbar.scrolled {
  background-color: rgba(15, 23, 42, 0.95);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  text-decoration: none;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: var(--color-text-muted);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--color-primary);
}

.language-switcher {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  padding: 0.25rem;
  background-color: var(--color-surface);
}

.lang-btn {
  background: none;
  border: none;
  color: var(--color-text-muted);
  font-weight: 600;
  font-size: 0.75rem;
  padding: 0.375rem 0.625rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.lang-btn.active {
  background-color: var(--color-primary);
  color: #0f172a;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--color-text);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.mobile-toggle span.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.mobile-toggle span.open:nth-child(2) {
  opacity: 0;
}

.mobile-toggle span.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }

  .nav-right {
    gap: 1rem;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background-color: rgba(15, 23, 42, 0.98);
    padding: 1rem 0;
    transform: translateY(-150%);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-links li {
    text-align: center;
  }

  .nav-links a {
    display: block;
    padding: 1rem;
  }

  .language-switcher {
    order: -1;
  }
}
</style>
