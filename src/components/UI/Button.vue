<template>
	<button
		:class="{
			linkButton: type === 'link',
			secondaryButton: type === 'secondary',
			iconButton: type === 'icon',
		}"
	>
		<router-link v-if="type === 'link'" :to="this.to">
			<slot></slot>
		</router-link>
		<slot v-else></slot>
	</button>
</template>
<script lang="ts">
export default {
	name: 'ui-button',
	props: {
		to: {
			type: String,
			required: false,
		},
		type: { type: String, required: true }, //type : link, primary, secondary, icon
	},
};
</script>
<style scoped>
.linkButton,
.secondaryButton {
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	font-family: 'Montserrat';
}
.linkButton,
.secondaryButton,
.iconButton {
	border: none;
	background: none;
}
.linkButton > a {
	text-decoration: none;
	color: black;
}
.linkButton > a:hover {
	border-bottom: 2.2px solid black;
}
.linkButton,
.secondaryButton,
.iconButton {
	margin: 10px;
	padding: 8px;
}
.iconButton:hover {
	cursor: pointer;
}
</style>
