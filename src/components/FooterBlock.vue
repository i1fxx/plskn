<template>
	<div class="botBlock">
		<ui-text>
			{{ this.$siteName }} &copy; {{ new Date().getFullYear() }}
		</ui-text>
		<div class="linkBlock">
			<a :href="'mailto:' + this.$adminEmail" class="mailLinkIcon"
				><mail-icon
			/></a>
			<router-link to="/support">
				<heart-icon class="supportLink" />
			</router-link>
		</div>
	</div>
</template>
<script lang="ts">
import { MailIcon, HeartIcon } from 'vue-tabler-icons';
export default {
	components: { MailIcon, HeartIcon },
};
</script>
<style scoped>
.mailLinkIcon {
	color: black;
}
.linkBlock {
	margin-top: 5px;
}
.supportLink {
	color: red;
	margin-left: 8px;
}
.botBlock {
	width: 100%;
	text-align: center;
	padding: 20px;
}
</style>
