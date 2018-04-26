/* Circles app created by Lydia Douglas 2018 */



/*** declare global variables **/

//calling init function
$(document).ready(function() {
    init();
});

//initialising document
function init() {
    var data = {
        fancyDiv: {
            backgroundColor: 'lightgrey',
            borderRadius: '10px',
            padding: '10px',
            marginTop: '30px'
        },
        fancierDiv: {
            fontFamily: 'Arial, Helvetica',
            border: 'solid 1px black',
            padding: '30px'
        },

        cold: true,
        hot: false,
        cssClasses: {
            square: true,
            'dashed-border': true,
            blue: false
        },
        squareClass: 'square',
        bgColorClass: 'red',
        selected: true,

        expcircleClass: 'expcircle',

        circleRadius: 200,
        radiusNumber: 130,
        sizeNumber: 260,
        satNumber: 50,
        hueNumber: 130,
        lightNumber: 50

    };
    // slider component wip
    Vue.component('hue-table', {
        data: function() {
            return {
                count: 0,
                items: [{
                        message: "one"
                    },
                    {
                        message: "two"
                    },
                    {
                        message: "three"
                    },
                ]
            }
        },
        template: '<div id="huetable"><table class="tableslider"><tbody><tr><td v-for="item in items">{{ item.message }}</td></tr></div>'
            // template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    });
    Vue.component('saturation-table', {
        data: function() {
            return {
                count: 0,
                items: [{
                        message: "one"
                    },
                    {
                        message: "two"
                    },
                    {
                        message: "three"
                    },
                ]
            }
        },
        template: '<div id="saturationtable"><table class="tableslider"><tbody><tr><td v-for="item in items">{{ item.message }}</td></tr></div>'
            // template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    });
    Vue.component('lightness-table', {
        data: function() {
            return {
                count: 0,
                items: [{
                        message: "one"
                    },
                    {
                        message: "two"
                    },
                    {
                        message: "three"
                    },
                ]
            }
        },
        template: '<div id="lightnesstable"><table class="tableslider"><tbody><tr><td v-for="item in items">{{ item.message }}</td></tr></div>'
            // template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    });

    new Vue({
        el: '#app',
        data: data
    });
}