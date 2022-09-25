import { LitElement, html, TemplateResult } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

import { Traveler, Route } from 'travelerjs'

// Types and interfaces
interface ElementRoute {
    path: string,
    content: TemplateResult<1>
}

const router = new Traveler()

@customElement('lit-router')
export class LitRouter extends LitElement {
    @property()
        routes: ElementRoute[] = []

    @state()
        content: TemplateResult<1> = html``

    @state()
        params: string = ''

    render() {
        return this.content
    }

    firstUpdated() {
        this.routes.forEach(r => {
            router.register(new Route(r.path, params => {
                this.params = params
                this.content = r.content
            }))
        })

        router.listen()
    }
}

@customElement('router-link')
export class RouterLink extends LitElement {
    @property()
        to = '#'

    @property()
        class = ''

    @property()
        'anchor-id' = ''

    render() {
        return html`
            <a class=${this.class} @click=${this.go} href='' id=${this['anchor-id']}>
                <slot></slot>
            </a>
        `
    }

    go(ev: MouseEvent) {
        ev.preventDefault()
        router.go(this.to)
    }
}

export function getParams() {
    const paths = location.pathname.split('/')
    return paths[paths.length - 1]
}