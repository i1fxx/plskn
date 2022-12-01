<template>
	<div class="mainTopBlock">
		<transition name="slide-fade">
			<div
				class="logoBlock"
				v-if="
					((currentPage === '/' && logoVisible) || currentPage != '/') &&
					!loading
				"
			>
				<router-link to="/">
					<img src="@/assets/images/logo.png" width="150" height="50" />
				</router-link>
			</div>
		</transition>
		<ul class="menuList">
			<li v-for="link in navLinks">
				<ui-button
					:type="this.windowWidth > 330 ? 'link' : 'icon'"
					:to="link.href"
				>
					{{ this.windowWidth > 330 ? link.name : '' }}
				</ui-button>
			</li>
		</ul>
	</div>
</template>
<script lang="ts">
import { ITabs } from '@/types/index';
import { ListIcon } from 'vue-tabler-icons';
import { defineComponent } from 'vue';

export default defineComponent({
	components: {
		ListIcon,
	},
	props: {
		logoVisible: {
			type: Boolean,
			required: false,
			default: false,
		},
		currentPage: {
			type: String,
			required: true,
		},
	},

	data() {
		return {
			navLinks: <ITabs[]>[
				{ name: 'Стихотворения', href: '/poem', icon: 'list-icon' },
				{ name: 'Об авторе', href: '/about', icon: 'user-icon' },
			],
			windowWidth: window.innerWidth,
			loading: true,
		};
	},
	methods: {
		handleWindowResize(event) {
			this.windowWidth = event.currentTarget.innerWidth;
		},
	},
	beforeDestroy: function () {
		window.removeEventListener('resize', this.handleWindowResize);
	},
	mounted() {
		window.addEventListener('resize', this.handleWindowResize);
		setTimeout(() => {
			this.loading = false;
		}, 666);
	},
});
</script>
<style scoped>
.mainTopBlock {
	text-align: center;
	width: 100%;
	padding-top: 15px;
	position: fixed;
	z-index: 10000;
	background: white;
}
.menuList {
	margin: 0;
	padding: 0;
	list-style: none;
}
.menuList li {
	display: inline-block;
}
.menuList li:not(:first-child) {
	margin-left: 15px;
}
.slide-fade-enter-active {
	transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateY(-150%);
	opacity: 0;
}
</style>
