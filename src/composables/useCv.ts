import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type cvEs from '@/data/cv-es'
import cvEsData from '@/data/cv-es'
import cvEnData from '@/data/cv-en'

type CvData = typeof cvEs

export function useCv() {
  const { locale } = useI18n()

  return computed<CvData>(() => (locale.value === 'en' ? cvEnData : cvEsData))
}
