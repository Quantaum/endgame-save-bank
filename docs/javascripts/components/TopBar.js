Vue.component("top-bar", {
    props: {
        version: String
    },
    template: `
    <header>
        <menu-button @toggle-menu="$emit('menu')"></menu-button>
        <div class="title">
            AD: Endgame Save Bank
        </div>
        <div class="about">
            <span class="version">{{version}}</span>
            <span class="link">
                 | <a target="_blank" href="changelog.html" class="link">Changelog</a>
                 | <a target="_blank" href="https://github.com/Quantaum/endgame-save-bank" class="link">Github</a>
            </span>
        </div>
    </header>
    `
});
