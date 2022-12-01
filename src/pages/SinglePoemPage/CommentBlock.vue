<template>
	<div class="commentsBlock">
		<message-circle-icon :size="14" class="headerIcon" />
		<ui-header :size="4">Комментарии</ui-header>
		<div id="commento"></div>
	</div>
</template>
<script lang="ts">
import { MessageCircleIcon } from 'vue-tabler-icons';
export default {
	components: {
		MessageCircleIcon,
	},
	mounted() {
		let recaptchaScript = document.createElement('script');
		recaptchaScript.setAttribute(
			'src',
			'https://cdn.commento.io/js/commento.js'
		);
		document.head.appendChild(recaptchaScript);
	},
};
</script>
<style>
.commentsBlock {
	margin-top: 10px;
}
.headerIcon {
	margin-right: 5px;
}
</style>
