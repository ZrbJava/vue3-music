import { createApp } from 'vue'
import { addClass, removeClass } from '@/assets/js/dom'

const relativeCls = 'g-relative'

export default function createLoadingLikeDirective(Comp) {
	return {
		mounted(el, binding) {
			const app = createApp(Comp)
			const instance = app.mount(document.createElement('div'))
			const { name } = Comp
			const { arg: title, value } = binding
			if (!el[name]) el[name] = {}
			el[name].instance = instance
			if (typeof title !== 'undefined') instance.setTitle(title)
			if (value) append(el)
		},
		updated(el, binding) {
			const { arg: title, value } = binding
			const { name } = Comp
			if (typeof title !== 'undefined') el[name].instance.setTitle(title)
			if (value !== binding.oldValue) binding.value ? append(el) : remove(el)
		},
	}

	function append(el) {
		const { name } = Comp
		const style = getComputedStyle(el)
		if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
			addClass(el, relativeCls)
		}
		el.appendChild(el[name].instance.$el)
	}

	function remove(el) {
		const { name } = Comp
		removeClass(el, relativeCls)
		el.removeChild(el[name].instance.$el)
	}
}
