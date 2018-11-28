const RouletteView = Vue.component("roulette-view", {
    template: "#roulette-template"
});

const DisclaimerView = Vue.component("disclaimer-view", {
    template: "#disclaimer-template"
});

const SettingsView = Vue.component("settings-view", {
    template: "#settings-template"
});

const router = new VueRouter({
    routes: [
        {path: "/roulette", component: RouletteView},
        {path: "/disclaimer", component: DisclaimerView},
        {path: "/settings", component: SettingsView}
    ],
    linkActiveClass: "mdl-navigation__link--current"
});

const app = new Vue({
    el: "#app",
    router: router
});
