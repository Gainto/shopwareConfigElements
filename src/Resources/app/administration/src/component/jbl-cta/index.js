const { Component } = Shopware;
import template from './jbl-cta.html.twig';

Component.register('jbl-cta', {
    template,

    props: {
        text: {
            type: String,
            required: false,
            default: '',
        },
        headline: {
            type: String,
            required: false,
            default: '',
        },
        buttonText: {
            type: String,
            required: false,
            default: '',
        },
        buttonLink: {
            type: String,
            required: false,
            default: '',
        },
        buttonVariant:{
            type: String,
            required: false,
            default: 'primary'
        }


    },
})
