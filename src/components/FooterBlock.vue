<template>
	<div class="botBlock">
		<ui-text>
			{{ this.$siteName }} &copy; {{ new Date().getFullYear() }}
		</ui-text>
		<div class="linkBlock">
			<ul class="linksList">
				<li v-for="link of links" :key="link">
					<a :href="link.link" target="referer">
						<ui-button type="icon">
							<mail-icon v-if="link.name === 'mail'" />
							<brand-tiktok-icon v-if="link.name === 'tiktok'" />
							<feather-icon v-if="link.name === 'stihi'" />
							<heart-icon
								:style="{
									color: 'red',
								}"
								v-if="link.name === 'support'"
							/>
						</ui-button>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script lang="ts">
import {
	MailIcon,
	HeartIcon,
	BrandTiktokIcon,
	FeatherIcon,
} from 'vue-tabler-icons';
import { defineComponent } from 'vue';

export default defineComponent({
	components: { MailIcon, HeartIcon, BrandTiktokIcon, FeatherIcon },
	data() {
		return {
			links: [
				{ name: 'mail', link: 'mailto:' + this.$adminEmail },
				{ name: 'stihi', link: 'https://stihi.ru/avtor/plskn' },
				{ name: 'tiktok', link: 'https://tiktok.com/@plskn_poet' },
				{ name: 'support', link: '/support' },
			],
		};
	},
});
</script>
<style scoped>
.linksList {
	list-style: none;
}
.linksList > li {
	display: inline-block;
}
.linksList > li:not(:first-child) {
	margin-left: 5px;
}
.linkBlock {
	margin-top: 5px;
}
.botBlock {
	width: 100%;
	text-align: center;
	padding: 20px;
}
</style>
