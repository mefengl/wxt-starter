// Integrated - Vanilla
// More: https://wxt.dev/guide/content-script-ui.html
export default defineContentScript({
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      onMount: (container) => {
        // Edit dom: Append children to the container
        const app = document.createElement('p')
        app.textContent = 'content script'
        container.append(app)

        // Run js
        // eslint-disable-next-line no-console
        console.log('content script')
      },
      position: 'inline',
    })

    ui.mount()
  },

  matches: ['<all_urls>'],
})
