<template>
	<ui-card class="aboutPageMainCard">
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
			<ui-header :size="4"> Детство 1959 г. – 1977 г. </ui-header>

			<ui-text>
				Поэт современного времени, Поваляев Александр Александрович, под
				творческим псевдонимом ПЛЯСКИН родился 15 сентября 1959 года в Лениграде
				на Моховой улице. С раннего детства летние месяцы проводил в деревне у
				свей бабушки в Калининской области. Ребёнком был болезненным и только
				бабушкино парное молоко и прочие натуральные продукты, свежий
				деревенский воздух помогли окрепнуть, набраться жизненных сил. Кроме
				этого бабушка привила любовь и уважение к родным местам, научила ценить
				красоту окружающей природы. Также в окресностях Калининской области
				происходили одни из самых важных и значимых этавпов в формировании
				будущего мировозрения автора. Бабушке, которую автор очень любил, считал
				одним из самых значимых людей в своей жизни, посвещены самые первые
				стихи.
			</ui-text>
			<br /><br />
			<ui-header :size="4"> Армия 1977 г. - 1979 г. </ui-header>
			<ui-text>
				После окончания школы проходил армейскую службу в танковых войсках в ГДР
				(город Дрезден) где получил специальность воидель-механик. Во время
				службы в армии также происходили многозначимые события, которые
				сказались на всем будущем автора.
			</ui-text>
			<br /><br />
			<ui-header :size="4"> Образование 1983 г. – 1987 г. </ui-header>
			<ui-text>
				В 1983 году поступил в Ленинрадский механический техникум
				железнодорожного транспорта, который закончил в 1987 году и получил ещё
				специальности техника-электромеханика, механика рефрижераторных секций.
			</ui-text>
			<br /><br />
			<ui-header :size="4">
				Октяборьская железная дорога 1980 г. – 2007 г.
			</ui-header>
			<ui-text>
				Более 25 лет отработал в Рефрижираторном Депо «Предпортовая» Октябрьской
				железной дороги. За эти годы объехал весь Советский Союз. Стихи, в
				основном, были написаны во время длительных командировок.<br /><br />15
				Ноября 1997 женился на Загорской Елене Николаевне. В этом браке родился
				сын.
			</ui-text>
			<br /><br />
			<ui-header :size="4"> Трудовая деятельность 2007 г. – 2018 г. </ui-header>
			<ui-text>
				Послже службы на железной дороге осуществлял трудовую деятельность в
				качестве рефрежераторщика, специалиса по обслуживанию кондиционеров и
				вентиляции на историческо-социальнозначимых объектах, таких как :
				Российская Национальная Библиотека, Исакиевский Собор и прочие.
			</ui-text>
			<br /><br />
			<ui-header :size="4"> Последние годы 2018 г. – 2022 г. </ui-header>
			<ui-text>
				Последние годы Пляскин провел на пенсии, находился в Санкт-Петербурге, в
				кругу семи и близких. В Сентябре 2022 года, в связи с осложнением
				болезни был госпитализирован в городскую больницу Святого Георгия.<br /><br />9
				Ноября 2022 Пляскина не стало.
			</ui-text>
		</div>
		<div class="memoryBlock">
			<ui-row :gutter="12" class="aboutBlock">
				<ui-column :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
					<ui-header
						:size="2"
						:style="{ color: 'white', 'line-height': '75px' }"
						>1959 - 2022</ui-header
					>
				</ui-column>
				<ui-column :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
					<div><img src="@/assets/images/dove.png" width="75" /></div>
				</ui-column>
			</ui-row>
		</div>
	</ui-card>
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
	props: {
		windowWidth: {
			type: Number,
			required: true,
		},
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
<style scoped>
.memoryBlock {
	margin-top: 25px !important;
	background: black;
	text-align: center;
	border-radius: 0 0 7px 7px;
	padding: 10px;
	margin: -10px;
	width: calc(100% + 20px);
	max-width: 550px;
}
.aboutPageMainCard {
	margin: 0 auto;
	max-width: 550px;
}
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
