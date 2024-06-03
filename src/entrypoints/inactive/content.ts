// Integrated - Vanilla
// More: https://wxt.dev/guide/content-script-ui.html
export default defineContentScript({
  matches: ['<all_urls>'],

  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: 'inline',
      onMount: (container) => {
        // Edit dom: Append children to the container
        const app = document.createElement('p')
        app.textContent = 'content script'
        container.append(app)

        // Run js
        // eslint-disable-next-line no-console
        console.log('content script')
      },
    })

    ui.mount()
  },
})
