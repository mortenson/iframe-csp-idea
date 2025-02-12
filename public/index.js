window.addEventListener('load', () => {
  fetch('/hello').then(res => res.text()).then(text => {
    document.getElementById("output").innerText += `\nGot "${text}" from our backend.`
  }).catch(() => {
    document.getElementById("output").innerText += `\nFailed to contact our backend.`
  })

  // Purely for visualizing location changes.
  document.getElementById('current-path').innerText = `Current path: ${window.location.pathname}`
})
