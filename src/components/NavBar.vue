<template>
	<div class="mainTopBlock">
		<ui-card class="navCard">
			<div class="logoBlock">
				<router-link to="/">
					<img src="@/assets/images/logo.png" width="125" height="40" />
				</router-link>
			</div>
			<ul
				:class="{
					menuList: true,
					logoView: (currentPage === '/' && logoVisible) || currentPage != '/',
				}"
			>
				<li v-for="link in navLinks">
					<ui-button
						:type="this.windowWidth > 475 ? 'link' : 'icon'"
						:active="link.href === currentPage"
						class="navButton"
					>
						<router-link :to="link.href">
							<span v-if="this.windowWidth > 475">{{ link.name }}</span>
							<span v-else>
								<list-icon v-if="link.icon === 'list-icon'" />
								<user-icon v-if="link.icon === 'user-icon'" />
							</span>
						</router-link>
					</ui-button>
				</li>
			</ul>
		</ui-card>
	</div>
</template>
<script lang="ts">
import { ITabs } from '@/types/index';
import { ListIcon, UserIcon } from 'vue-tabler-icons';
import { defineComponent } from 'vue';

export default defineComponent({
	components: {
		ListIcon,
		UserIcon,
	},
	props: {
		currentPage: {
			type: String,
			required: true,
		},
		windowWidth: {
			type: Number,
			required: true,
		},
	},

	data() {
		return {
			navLinks: <ITabs[]>[
				//{ name: 'Стихотворения', href: '/poem', icon: 'list-icon' },
				{ name: 'Об авторе', href: '/about', icon: 'user-icon' },
			],
		};
	},
});
</script>
<style scoped>
.navCard {
	max-width: 100% !important;
	height: 60px;
}
.mainTopBlock {
	text-align: center;
	width: 100%;
	max-width: 650px;
	position: fixed;
	z-index: 10000;
	padding: 0 15px 0 15px;
	margin: 12px auto;
	left: 0;
	right: 0;
}
.menuList {
	float: right;
	display: block;
	padding: 0;
	list-style: none;
	height: 40px;
}
.logoView {
	float: right;
}
.menuList li {
	display: inline-block;
}
.menuList li:not(:first-child) {
	margin-left: 20px;
}
.slide-fade-enter-active {
	transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateY(-150%);
	opacity: 0;
}
.logoBlock {
	float: left;
}
.navButton {
	height: 40px;
	margin: 0;
}
</style>
