<template>
	<div class="commentsBlock">
		<message-circle-icon :size="14" class="headerIcon" />
		<ui-header :size="4">Комментарии</ui-header>
		<div id="commento" class="commentoBlock"></div>
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
		recaptchaScript.setAttribute(
			'data-css-override',
			'https://plskn.ru/commento.css'
		);
		recaptchaScript.setAttribute('data-no-fonts', 'false');
		document.head.appendChild(recaptchaScript);
	},
};
</script>
<style>
.headerIcon {
	margin-right: 5px;
	height: 19.2px;
	float: left;
}
.commentoBlock {
	margin-top: 18px;
}
.commentsBlock {
	margin-top: 10px;
}
</style>
