<template>
	<div class="imagesPath">
		<Carousel :autoplay="3500" :wrap-around="true">
			<Slide v-for="image in imageList" :key="image">
				<div
					class="carouselItem"
					:style="{
						background:
							'url(' +
							require('@/assets/images/plskn/' + image) +
							') no-repeat center center fixed',
					}"
				></div>
			</Slide>

			<template #addons>
				<Pagination />
			</template>
		</Carousel>
	</div>
	<div class="textPath">
		<ui-text>
			Современные технологии достигли такого уровня, что постоянное
			информационно-пропагандистское обеспечение нашей деятельности играет
			определяющее значение для стандартных подходов. Являясь всего лишь частью
			общей картины, явные признаки победы институционализации представляют
			собой не что иное, как квинтэссенцию победы маркетинга над разумом и
			должны быть подвергнуты целой серии независимых исследований. Банальные,
			но неопровержимые выводы, а также явные признаки победы
			институционализации, превозмогая сложившуюся непростую экономическую
			ситуацию, призваны к ответу. Принимая во внимание показатели успешности,
			постоянное информационно-пропагандистское обеспечение нашей деятельности в
			значительной степени обусловливает важность новых принципов формирования
			материально-технической и кадровой базы.
		</ui-text>
	</div>
</template>
<script lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default {
	data() {
		return {
			imageList: ['img3369.jpg', 'img3370.jpg', 'img3372.jpg'],
		};
	},
	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
};
</script>
<style>
.imagesPath,
.textPath {
	width: 100%;
	max-width: 550px;
}
.textPath {
	margin: 30px auto;
}
.imagesPath {
	margin: 0 auto;
}
.carousel__slide {
	padding: 10px;
}
.carouselItem {
	background-size: cover !important;
	min-height: 200px;
	width: 100%;
	border-radius: 8px;	
	display: flex;
	justify-content: center;
	align-items: center;
}
.textPath,
.carouselItem {
	max-width: 350px;
}
</style>
