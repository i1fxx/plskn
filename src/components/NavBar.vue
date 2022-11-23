<template>
	<div class="mainTopBlock">
		<div>
			<router-link to="/">
				<img src="https://via.placeholder.com/125x50" />
			</router-link>
		</div>
		<ul class="menuList">
			<li v-for="link in navLinks">
				<ui-button :type="'link'" :to="link.href">
					{{ link.name }}
				</ui-button>
			</li>
		</ul>
	</div>
</template>
<script lang="ts">
import { ITabs } from '@/types/index';

export default {
	data() {
		return {
			navLinks: <ITabs[]>[
				{ name: 'Стихотворения', href: '/poem' },
				{ name: 'Об авторе', href: '/about' },
			],
		};
	},
};
</script>
<style scoped>
.mainTopBlock {
	text-align: center;
	width: 100%;
	padding-top: 15px;
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
</style>
