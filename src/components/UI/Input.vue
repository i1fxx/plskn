<template>
	<input :value="modelValue" @input="updateInput" type="text" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
interface InputTextEvent extends Event {
	target: HTMLTextAreaElement;
}
export default defineComponent({
	name: 'ui-text-input',
	props: {
		modelValue: [String, Number],
	},
	methods: {
		updateInput(event: InputTextEvent) {
			this.$emit('update:modelValue', event.target.value);
		},
	},
});
</script>
