import {addClass, removeClass} from "./helpers";

export default {
    install(Vue) {
        Vue.directive('tooltip', {
            bind(el, bindings) {
                let span = document.createElement('span');
                let text = document.createTextNode(`Seats available: ${bindings.value.seats}`);
                span.appendChild(text);
                addClass(span, 'tooltip');
                el.appendChild(span);
                let div = el.getElementsByTagName('div')[0];
                div.addEventListener('mouseover', () => addClass(span, 'tooltip-show'));
                div.addEventListener('mouseout', () => removeClass(span, 'tooltip-show'));
                div.addEventListener('touchstart', () => addClass(span, 'tooltip-show'));
                div.addEventListener('touchend', () => removeClass(span, 'tooltip-show'));
            },
            unbind(el) {
                let div = el.getElementsByTagName('div')[0];
                div.removeEventListener('mouseover', () => addClass(span, 'tooltip-show'));
                div.removeEventListener('mouseout', () => removeClass(span, 'tooltip-show'));
                div.removeEventListener('touchstart', () => addClass(span, 'tooltip-show'));
                div.removeEventListener('touchend', () => removeClass(span, 'tooltip-show'));
            }
        });
    }
}