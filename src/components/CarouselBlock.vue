<template>
	<div class="imagesPath">
		<Carousel>
			<Slide v-for="photo in images" :key="photo">
				<div
					class="carouselItem"
					:style="{
						background:
							'url(' +
							require('@/assets/images' + photo) +
							') no-repeat center center fixed',
					}"
				/>
			</Slide>

			<template #addons>
				<Pagination />
			</template>
		</Carousel>
	</div>
</template>
<script lang="ts">
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { PropType } from 'vue';
export default {
	components: {
		Carousel,
		Slide,
		Pagination,
	},
	props: {
		images: {
			type: Array as PropType<string[]>,
			required: true,
		},
	},
};
</script>
<style>
.imagesPath {
	width: 100%;
	max-width: 550px;
	margin: 0 auto;
}
.carouselItem {
	background-size: cover !important;
	width: 100%;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 450px;
	max-width: 550px;
}

.carousel__slide {
	padding: 10px;
}
</style>
