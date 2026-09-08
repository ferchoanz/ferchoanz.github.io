import { createI18n } from 'vue-i18n'
import es from './locales/es.json'
import en from './locales/en.json'

export type Locale = 'es' | 'en'

const STORAGE_KEY = 'preferred-lang'
const DEFAULT_LOCALE: Locale = 'es'

function detectLocale(): Locale {
  const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
  if (saved === 'en' || saved === 'es') {
    return saved
  }

  const browserLang = navigator.language.toLowerCase()
  if (browserLang.startsWith('es')) {
    return 'es'
  }

  return 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    es,
    en,
  },
})

export default i18n
