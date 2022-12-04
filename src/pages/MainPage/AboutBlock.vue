<template>
	<ui-row :gutter="12" class="aboutBlock">
		<ui-column :order="1" :xs="12" :md="6" :lg="6">
			<ui-text class="textPath">
				Современные технологии достигли такого уровня, что постоянное
				информационно-пропагандистское обеспечение нашей деятельности играет
				определяющее значение для стандартных подходов. Являясь всего лишь
				частью общей картины, явные признаки победы институционализации
				представляют собой не что иное, как квинтэссенцию победы маркетинга над
				разумом и должны быть подвергнуты целой серии независимых исследований.
				Банальные, но неопровержимые выводы, а также явные признаки победы
				институционализации, превозмогая сложившуюся непростую экономическую
				ситуацию, призваны к ответу. Принимая во внимание показатели успешности,
				постоянное информационно-пропагандистское обеспечение нашей деятельности
				в значительной степени обусловливает важность новых принципов
				формирования материально-технической и кадровой базы.<br /><br /><ui-link
					to="/about"
				>
					Подробнее об авторе
				</ui-link>
			</ui-text>
		</ui-column>
		<ui-column :order="2" :xs="12" :md="6" :lg="6" class="photoPath">
			<img
				src="@/assets/images/plskn/img3367.jpg"
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
	max-width: 350px;
	margin: 0 auto;
	display: block;
	padding: 45px;
}
.photoPath {
	text-align: center;
}
.photoPath > img {
	width: 100%;
	max-width: 350px;
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
	max-width: 650px;
	margin: 0 auto !important;
}
</style>
