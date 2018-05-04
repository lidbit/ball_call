/* Circles app created by Lydia Douglas 2018 */



/*** declare global variables **/

//calling init function
$(document).ready(function() {
    init();
});

//initialising document
function init() {
    var data = {
        circleRadius: 200,
        radiusNumber: 130,
        sizeNumber: 260,
        satNumber: 50,
        hueNumber: 300,
        lightNumber: 50
    };
    // // slider component wip
    // Vue.component('hue-table', {
    //     data: function() {
    //         return {
    //             count: 0,
    //             items: [{
    //                     message: "one"
    //                 },
    //                 {
    //                     message: "two"
    //                 },
    //                 {
    //                     message: "three"
    //                 },
    //             ]
    //         }
    //     },
    //     template: '<div id="huetable"><table class="tableslider"><tbody><tr><td v-for="item in items">{{ item.message }}</td></tr></div>'
    //         // template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    // });
    // Vue.component('saturation-table', {
    //     data: function() {
    //         return {
    //             count: 0,
    //             items: [{
    //                     message: "one",
    //                     value: 0,
    //                     color: '#111'
    //                 },
    //                 {
    //                     message: "two",
    //                     value: 25,
    //                     color: '#222'
    //                 },
    //                 {
    //                     message: "three",
    //                     value: 50,
    //                     color: '#555'
    //                 },
    //                 {
    //                     message: "three",
    //                     value: 100,
    //                     color: '#999'
    //                 },
    //             ]
    //         }
    //     },
    //     template: '<div id="saturationtable"><table class="tableslider"><tbody><tr><td v-bind:style="{ \'background-color\': item.color }" v-for="item in items">{{ item.message }}</td></tr></div>'
    //         // template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    // });
    // Vue.component('lightness-table', {
    //     data: function() {
    //         return {
    //             count: 0,
    //             items: [{
    //                     message: "one"
    //                 },
    //                 {
    //                     message: "two"
    //                 },
    //                 {
    //                     message: "three"
    //                 },
    //             ]
    //         }
    //     },
    //     template: '<div id="lightnesstable"><table class="tableslider"><tbody><tr><td v-for="item in items">{{ item.message }}</td></tr></div>'
    //         // template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    // });

    new Vue({
        el: '#app',
        data: data
    });
}