<script setup lang="ts">
import { personalInfo } from '@/data/cv'
</script>

<template>
  <section id="home" class="hero">
    <div class="container hero-content">
      <div class="hero-text">
        <p class="hero-greeting">Hola, soy</p>
        <h1 class="hero-name">{{ personalInfo.name }}</h1>
        <h2 class="hero-title">{{ personalInfo.title }}</h2>
        <p class="hero-description">{{ personalInfo.about }}</p>
        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary">Contáctame</a>
          <a :href="personalInfo.linkedin" target="_blank" rel="noopener" class="btn btn-outline">
            LinkedIn
          </a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-card">
          <span class="hero-initials">FP</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 5rem;
  background: radial-gradient(circle at top right, rgba(56, 189, 248, 0.1), transparent 40%),
    var(--color-bg);
}

.hero-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
}

.hero-greeting {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.hero-name {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, var(--color-text), var(--color-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-title {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  color: var(--color-text-muted);
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  max-width: 540px;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.hero-card {
  width: 280px;
  height: 280px;
  border-radius: 2rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 40px -10px rgba(56, 189, 248, 0.3);
}

.hero-initials {
  font-size: 6rem;
  font-weight: 800;
  color: white;
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-card {
    width: 200px;
    height: 200px;
  }

  .hero-initials {
    font-size: 4rem;
  }
}
</style>
