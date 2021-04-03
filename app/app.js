import Vue from 'nativescript-vue';

import GabsClasses from './components/App';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    template: `
        <Frame>
            <GabsClasses />
        </Frame>`,

    components: {
        GabsClasses
    }
}).$start();