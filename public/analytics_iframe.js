// We're not in an iframe already, load one with the same path we're on.
if (window.self === window.top) {
  const iframe = document.createElement('iframe')
  iframe.src = window.location.pathname
  iframe.width = 500
  document.body.appendChild(iframe)
}
