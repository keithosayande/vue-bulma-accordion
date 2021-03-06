import * as components from './components.js';

// Declare install function executed by Vue.use()
export function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component('bulma-accordion', components.BulmaAccordion);
    Vue.component('bulma-accordion-item', components.BulmaAccordionItem);
}

const plugin = {
    install
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

export const BulmaAccordion = components.BulmaAccordion;
export const BulmaAccordionItem = components.BulmaAccordionItem;

