export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en',
  pluralRules(locale, choice) {
    return choice === 0 ? 0 : 1
  }
}))


