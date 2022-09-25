# @eboon/lit-router

A simple router for Lit using travelerjs. It also comes with links!

## Usage

For using the router, you must create an array of routes, and send it as `routes` property to `lit-router` element.

```ts
// As we're using Lit, we don't need to import any variable, just the files.
import '@eboon/lit-router'

// The routes that the router will use.
const routes = [
    {
        // If the path matches, it will render the content.
        path: '/',
        content: html`<p>Hello world!</p>`
    },
    {
        // Path with parameter, read below for more info.
        path: '/user/@user',
        content: html`<user-info></user-info>`
    }
]

@customElement('your-element')
export class YourElement extends LitElement {
    render() {
        return html`
            <lit-router .routes=${routes}></lit-router>
        `
    }
}
```

### Parameters

In the above example we have the `/user/@user` path. `/user` is the route and `@user` the param. If you want to get the params, you must can them from the `getParams()` function.

```ts
import { getParams } from '@eboon/lit-router'

export class YourElement extends LitElement {
    @state()
        params = ''

    // ...

    // You can put it wherever you want, but firstUpdated is fine.
    // Params won't change unless you move to another route.
    firstUpdated() {
        this.params = getParams()
    }

    // ...
}
```

### Links

For using the links, use the `router-link` element. You cand send the `class` parameter to asign a custom class to the `<a>` element inside the `router-link`. In the rare case you also want to set an `id` to the `<a>`, use the `anchor-id` property (if you use the normal `id` it goes to the `router-link` element).

```ts
    // ...
    render() {
        return html`
            <router-link to='/some/path' class='my-link-class' anchor-id='some-link'></lit-router>
        `
    }
    // ...
```