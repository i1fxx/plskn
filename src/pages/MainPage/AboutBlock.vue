<template>
	<ui-row :gutter="12" class="aboutBlock">
		<ui-column :order="1" :xs="12" :md="6" :lg="6">
			<ui-text class="textPath">
				Добро пожаловать на веб-ресурс поэта современного времени
				<b>Пляскин</b>!<br /><br />На этом сайте вы найдете <b>информацию</b> об
				авторе,сможете <b>ознакомиться</b> со стихотворениями.<br /><br /><b
					>Оставляйте</b
				>
				комментарии под стихотворениями и <b>делитесь</b> ими в социальных
				сетях. <br /><br />
				<ui-link to="/about"> Подробнее об авторе </ui-link>
			</ui-text>
		</ui-column>
		<ui-column :order="2" :xs="12" :md="6" :lg="6" class="photoPath">
			<img
				src="@/assets/images/plskn/img3370.webp"
				:class="{
					descImage: windowWidth > 769,
				}"
			/>
		</ui-column>
	</ui-row>
</template>
<script lang="ts">
export default {
	props: {
		windowWidth: {
			type: Number,
			required: true,
		},
	},
	data() {
		return {};
	},
};
</script>
<style scoped>
.textPath {
	width: 100%;
	max-width: 350px !important;
	margin: 0 auto;
	display: block;
	padding: 45px;
	font-size: 1.25rem !important;
}
.photoPath {
	margin: 0 auto;
	max-width: 350px !important;
}
.photoPath > img {
	width: 100%;
	border-radius: 5px;
}
.descImage {
	vertical-align: middle;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	height: auto;
}
.aboutBlock {
	width: 100% !important;
	max-width: 650px;
	margin: 0 auto !important;
	min-height: 470px;
}
</style>
