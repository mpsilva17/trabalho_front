Vue.component('cmp-nav', {
    props: ['hassidebar', 'name', 'naviconurl', 'activeindex', 'options'],
    template:`
    <div id="nav">
        <nav class="green-app-background white-text">
            <div class="nav-wrapper">
                <img class="logo hide-on-med-and-down" src="img/logo.png" alt="logo">
                <a v-if="hassidebar" href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <a v-else="" v-bind:href="naviconurl" class="sidenav-trigger"><i class="material-icons">keyboard_backspace</i></a>
                <span class="title-nav hide-on-large-only">{{name}}</span>
                <ul class="right hide-on-med-and-down">
                    <li v-for="(option, index) in options" :class="activeindex === index ? 'active' : ''" class="valign-wrapper">
                        <span class="material-icons">{{option.icon}}</span>
                        <a :href="option.url">{{option.optionName}}</a>
                    </li>
                </ul>
            </div>
        </nav>

        <ul v-show="hassidebar" class="sidenav" id="mobile-demo">
            <img class="logo" src="img/logo.png" alt="logo">
            <li v-for="(option, index) in options" :class="activeindex === index ? 'active' : ''" class="valign-wrapper">
                <span class="material-icons">{{option.icon}}</span>
                <a :href="option.url">{{option.optionName}}</a>
            </li>
        </ul>
    </div>`
});