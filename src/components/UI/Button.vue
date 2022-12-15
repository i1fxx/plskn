<template>
	<button
		:class="{
			linkButton: type === 'link',
			secondaryButton: type === 'secondary',
			iconButton: type === 'icon',
			primaryButton: type === 'primary',
			activeLinkButton: active,
		}"
	>
		<slot></slot>
	</button>
</template>
<script lang="ts">
export default {
	name: 'ui-button',
	props: {
		type: { type: String, required: true }, //type : link, primary, secondary, icon
		active: { type: Boolean, required: false, default: false },
	},
};
</script>
<style>
.activeLinkButton > a {
	color: #334e67 !important;
}
.linkButton {
	font-size: 0.85rem;
	font-weight: 600;
	cursor: pointer;
	font-family: 'MontserratRegular';
}
.linkButton,
.secondaryButton,
.iconButton {
	border: none;
	background: none;
}
.linkButton > a,
.iconButton > a {
	text-decoration: none;
	color: black;
}
.secondaryButton,
.iconButton,
.primaryButton {
	padding: 5px;
}
.iconButton:hover,
.primaryButton:hover,
.secondaryButton:hover {
	cursor: pointer;
}
.primaryButton {
	background: #334e67;
	color: white;
	border: none;
	border-radius: 5px;
	font-family: 'MontserratRegular';
	font-size: 0.75rem;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.primaryButton:hover {
	background-color: #002ead;
	transition: 0.7s;
}
/*.primaryButton:active {
	background-color: #ffbf00;
}*/
.iconButton:hover {
	color: #334e67 !important;
}
.secondaryButton {
	background: none;
	border: 1px solid #767777;
	border-radius: 5px;
	font-size: 0.75rem;
	font-family: 'MontserratRegular';
}
</style>
