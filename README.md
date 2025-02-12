# iframe-csp-idea

An example project to show a creative way to use a CSP to load analytics in an
iframe.

The parent frame only loads JS related to the application, and has a
`connect-src` that allows connections to the backend API.

The child frame only loads JS related to analytics, and has a `connect-src`
that does not allow connections to the backend API, but allow connections to
analytics backends.

In practice, this should mean that, on load, the `window.location` is identical
between the frames, but in practice the child iframe cannot make use of the
user's credentials (cookies) due to the restrictive `connect-src`.

You could also pass history events to the child iframe, but it's a bit messy so
better to leave that to the implementer.

## Installation and use

1. Run `npm install`
2. Run `npm start`
3. Visit http://localhost:9337

## Notes

Analytics backends will need to allow all domains via CORS, since the iframe
has a unique (`null`) origin.
