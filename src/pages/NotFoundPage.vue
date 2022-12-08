<template>
	<ui-card class="notFoundCard">
		<img src="@/assets/images/404.png" width="350" />
		<div>
			<ui-header :size="3">Искомая страница не найдена!</ui-header>
			<div class="toMain">
				<ui-link to="/"> На главную </ui-link>
			</div>
		</div>
	</ui-card>
</template>
<script lang="ts">
export default {};
</script>
<style scoped>
.notFoundCard {
	margin: 0 auto;
}
.notFoundCard > img {
	width: 100%;
}
.notFoundCard > div {
	margin: 25px;
	text-align: center;
}
.toMain {
	margin-top: 10px;
}
</style>
