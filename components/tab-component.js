Vue.component('cmp-tab', {
    props: ['activeindex', 'tabs'],
    template:`
    <ul class="tabs green-app-background">
        <li class="tab" v-for="(tab, index) in tabs" :class="activeindex === index ? 'active' : ''"><a class="white-text" :href="tab.href">{{tab.name}}</a></li>
    </ul>`
});
