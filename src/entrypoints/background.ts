export default defineBackground(() => {
  // eslint-disable-next-line no-console
  console.log(`${i18n.t('hello')} background!`, { id: chrome.runtime.id })
})
