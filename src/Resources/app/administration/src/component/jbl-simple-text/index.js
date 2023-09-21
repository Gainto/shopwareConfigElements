const { Component } = Shopware;
import template from './jbl-simple-text.html.twig';

Component.register('jbl-simple-text', {
    template,

    props: {
        text: {
            type: String,
            required: false,
            default: '',
        },
    },
})
