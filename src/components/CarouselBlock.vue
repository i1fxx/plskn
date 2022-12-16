<template>
	<div class="imagesPath">
		<Carousel>
			<Slide v-for="photo in images" :key="photo">
				<v-lazy-image
					:src="require('@/assets/images' + photo)"
					width="350"
					height="550"
					class="carouselImage"
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
import { PropType } from 'vue';
import VLazyImage from 'v-lazy-image';
import 'vue3-carousel/dist/carousel.css';
export default {
	components: {
		Carousel,
		Slide,
		Pagination,
		VLazyImage,
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
.carouselImage {
	object-fit: cover;
}
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
