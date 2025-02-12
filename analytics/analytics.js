// Try to mess with the CSP to allow us to connect to backend.
document.getElementById('csp-meta-tag').setAttribute('content', "default-src 'self'; script-src 'self' http://localhost:9338; connect-src 'self' http://localhost:9338;")

window.addEventListener('load', () => {
  fetch('http://localhost:9338/hello').then(res => res.text()).then(text => {
    document.getElementById("output").innerText += `\nGot "${text}" from analytics backend.`
  }).catch(() => {
    document.getElementById("output").innerText += `\nFailed to contact analtyics backend.`
  })

  fetch('/hello').then(res => res.text()).then(text => {
    document.getElementById("output").innerText += `\nGot "${text}" from our backend. This should not happen!`
  }).catch(() => {
    document.getElementById("output").innerText += `\nFailed to contact our backend, which is expected.`
  })

  // Purely for visualizing location changes.
  document.getElementById('current-path').innerText = `Current path: ${window.location.pathname}`
})
