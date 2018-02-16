export class Joke {
    setup: string;
    punchline: string;
    hide: boolean;
    pippo: any;

    constructor(setup: string, punchline: string) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
    }

    toggle() {
        this.hide = !this.hide;
    }
}
