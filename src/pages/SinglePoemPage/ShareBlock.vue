<template>
	<div class="shareBlock">
		<share-icon :size="14" class="headerIcon" />
		<ui-header :size="4"> Поделиться </ui-header>
		<ul class="shareList">
			<li v-for="share of shareList">
				<ShareNetwork
					:network="share.name"
					:url="this.shareURL"
					:title="this.$siteName"
					:description="this.shareDescription"
					:quote="this.shareQuote"
					:hashtags="this.shareHashtags"
				>
					<ui-button type="icon">
						<span v-if="share.name === 'vk'">
							<brand-vk-icon :size="23" />
						</span>
						<span v-if="share.name === 'telegram'">
							<brand-telegram-icon :size="23" />
						</span>
						<span v-if="share.name === 'whatsapp'">
							<brand-whatsapp-icon :size="23" />
						</span>
						<span v-if="share.name === 'twitter'">
							<brand-twitter-icon :size="23" />
						</span>
					</ui-button>
				</ShareNetwork>
			</li>
		</ul>
	</div>
</template>
<script lang="ts">
import {
	ShareIcon,
	BrandTelegramIcon,
	BrandWhatsappIcon,
	BrandTwitterIcon,
	BrandVkIcon,
} from 'vue-tabler-icons';
import { IShare } from '@/types/index';
import { defineComponent } from 'vue';
export default defineComponent({
	components: {
		ShareIcon,
		BrandTelegramIcon,
		BrandWhatsappIcon,
		BrandTwitterIcon,
		BrandVkIcon,
	},
	props: {
		name: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			shareList: <IShare[]>[
				{ name: 'vk' },
				{ name: 'telegram' },
				{ name: 'whatsapp' },
				{ name: 'twitter' },
			],
			shareDescription: `Стихотворение "${this.name}"`,
			shareQuote: '',
			shareHashtags: 'стихотворение,проза,творчество,искусство',
			shareURL: this.$siteHost + this.$route.fullPath,
		};
	},
	methods: {
		span(icon: String) {
			return `<${icon}/>`;
		},
	},
});
</script>
<style>
.headerIcon {
	margin-right: 5px;
	height: 19.2px;
	float: left;
}
.shareBlock {
	margin-top: 20px;
}
.shareList {
	list-style: none;
}
.shareList > li {
	margin: 5px;
	display: inline-block;
}
</style>
