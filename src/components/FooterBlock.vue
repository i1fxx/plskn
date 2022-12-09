<template>
	<div class="botBlock">
		<ui-text>
			{{ this.$siteName }} &copy; {{ new Date().getFullYear() }}
		</ui-text>
		<div class="linkBlock">
			<ul class="linksList">
				<li v-for="link of socialLinks" :key="link.name">
					<a :href="link.link" target="referer">
						<ui-button type="icon">
							<brand-vk-icon v-if="link.name === 'vk'" />
							<brand-tiktok-icon v-if="link.name === 'tiktok'" />
							<feather-icon v-if="link.name === 'stihi'" />
						</ui-button>
					</a>
				</li>
				<li>
					<div class="vl"></div>
				</li>
				<li v-for="link of contactLinks" :key="link.name">
					<a :href="link.link" target="referer">
						<ui-button type="icon">
							<mail-icon v-if="link.name === 'mail'" />
						</ui-button>
					</a>
				</li>
				<li>
					<div class="vl"></div>
				</li>
				<li v-for="link of otherLinks" :key="link.name">
					<a :href="link.link" target="referer">
						<heart-icon
							:style="{
								color: '#B00000',
							}"
							v-if="link.name === 'support'"
						/>
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
	BrandVkIcon,
} from 'vue-tabler-icons';
import { defineComponent } from 'vue';

export default defineComponent({
	components: {
		BrandVkIcon,
		MailIcon,
		HeartIcon,
		BrandTiktokIcon,
		FeatherIcon,
	},
	data() {
		return {
			socialLinks: [
				{ name: 'vk', link: 'https://vk.com/' },
				{ name: 'stihi', link: 'https://stihi.ru/avtor/plskn' },
				{ name: 'tiktok', link: 'https://tiktok.com/@plskn_poet' },
			],
			contactLinks: [{ name: 'mail', link: 'mailto:' + this.$adminEmail }],
			otherLinks: [{ name: 'support', link: '/support' }],
		};
	},
});
</script>
<style scoped>
.vl {
	border-left: 2px solid #b8b7b6;
	height: 25px;
}
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
	margin-top: 35px;
}
</style>
