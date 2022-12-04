<template>
	<div class="imagesPath">
		<Carousel
			:autoplay="5500"
			:items-to-show="1"
			:wrap-around="false"
			v-model="currentSlide"
		>
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
		</Carousel>
		<Carousel
			id="thumbnails"
			:items-to-show="imageList.length"
			:wrap-around="true"
			v-model="currentSlide"
			ref="carousel"
		>
			<Slide v-for="slide in imageList.length" :key="slide">
				<div
					class="secondCarouselItem"
					@click="slideTo(slide - 1)"
					:style="{
						background:
							'url(' +
							require('@/assets/images/plskn/' + imageList[slide - 1]) +
							') no-repeat center center fixed',
					}"
				></div>
			</Slide>
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
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default defineComponent({
	data() {
		return {
			imageList: ['img3369.jpg', 'img3367.jpg', 'img3372.jpg'],
			currentSlide: 0,
		};
	},
	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
	methods: {
		slideTo(val) {
			this.currentSlide = val;
		},
	},
});
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
.carouselItem,
.secondCarouselItem {
	background-size: cover !important;
	width: 100%;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.carouselItem {
	height: 290px;

	max-width: 550px;
}
.secondCarouselItem {
	height: 75px;
}

.textPath {
	max-width: 350px;
}
</style>
