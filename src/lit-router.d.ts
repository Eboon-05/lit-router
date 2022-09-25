declare module 'travelerjs' {
    export class Traveler {
        register(route: Route): void
        listen(): void
        go(route: string): void
    }

    export class Route {
        constructor(path: string, callback: (params: string) => void)
    }
}