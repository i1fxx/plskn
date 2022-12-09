<template>
	<ui-card class="aboutPageMainCard">
		<div class="textPath">
			<ui-header :size="4"> Детство 1959 г. – 1977 г. </ui-header>
			<carousel-block :images="childsPhotos" />
			<ui-text>
				Поэт современного времени, Поваляев Александр Александрович, под
				творческим псевдонимом ПЛЯСКИН родился 15 сентября 1959 года в
				Ленинграде на Моховой улице. С раннего детства летние месяцы проводил в
				деревне у свей бабушки в Калининской области. Ребёнком был болезненным и
				только бабушкино парное молоко и прочие натуральные продукты, свежий
				деревенский воздух помогли окрепнуть, набраться жизненных сил. Кроме
				этого, бабушка привила любовь и уважение к родным местам, научила ценить
				красоту окружающей природы. Также в окрестностях Калининской области
				происходили одни из самых важных и значимых этапов в формировании
				будущего мировоззрения автора. Бабушке, которую автор очень любил,
				считал одним из самых значимых людей в своей жизни, посвящены самые
				первые стихи.
			</ui-text>
			<br /><br />
			<ui-header :size="4"> Армия 1977 г. - 1979 г. </ui-header>
			<carousel-block :images="armyPhotos" />
			<ui-text>
				После окончания школы проходил армейскую службу в танковых войсках в ГДР
				(город Дрезден) где получил специальность водитель-механик. Во время
				службы в армии также происходили много значимые события, которые
				сказались на всем будущем автора.
			</ui-text>
			<br /><br />
			<ui-header :size="4"> Образование 1983 г. – 1987 г. </ui-header>
			<ui-text>
				В 1983 году поступил в Ленинградский механический техникум
				железнодорожного транспорта, который закончил в 1987 году и получил ещё
				специальности техника-электромеханика, механика рефрижераторных секций.
			</ui-text>
			<br /><br />
			<ui-header :size="4">
				Октяборьская железная дорога 1980 г. – 2007 г.
			</ui-header>
			<carousel-block :images="railWayPhotos" />
			<ui-text>
				Более 25 лет отработал в Рефрижераторном Депо «Предпортовая» Октябрьской
				железной дороги. За эти годы объехал весь Советский Союз. Стихи, в
				основном, были написаны во время длительных командировок.
				<br /><br />15 Ноября 1997 женился на Загорской Елене Николаевне. В этом
				браке родился сын.
			</ui-text>
			<br /><br />
			<ui-header :size="4"> Трудовая деятельность 2007 г. – 2018 г. </ui-header>
			<ui-text>
				После службы на железной дороге осуществлял трудовую деятельность в
				качестве рефрижераторщик, специалиста по обслуживанию кондиционеров и
				вентиляции на историко-социально значимых объектах, таких как:
				Российская Национальная Библиотека, Исаакиевский Собор и прочие.
			</ui-text>
			<br /><br />
			<ui-header :size="4"> Последние годы 2018 г. – 2022 г. </ui-header>
			<ui-text>
				Последние годы Пляскин провел на пенсии, находился в Санкт-Петербурге, в
				кругу семи и близких. В Сентябре 2022 года, в связи с осложнением
				болезни, был госпитализирован в городскую больницу Святого Георгия.
				<br /><br />9 Ноября 2022 Пляскина не стало.
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
import CarouselBlock from '@/components/CarouselBlock.vue';
import { defineComponent } from 'vue';
export default defineComponent({
	components: {
		CarouselBlock,
	},
	data() {
		return {
			childsPhotos: ['/plskn/img3379.jpg', '/plskn/img3381.jpg'],
			armyPhotos: ['/plskn/img3382.jpg', '/photo_2022-12-07_01-26-22.jpg'],
			railWayPhotos: [
				'/plskn/img3367.jpg',
				'/plskn/img3369.jpg',
				'/plskn/img3372.jpg',
				'/plskn/img3370.jpg',
			],
		};
	},
	props: {
		windowWidth: {
			type: Number,
			required: true,
		},
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
	max-width: 626px;
}
.aboutPageMainCard {
	margin: 0 auto;
	max-width: 626px;
}
.textPath {
	width: 100%;
	max-width: 550px;
}
.textPath {
	margin: 30px auto;
}

.textPath {
	max-width: 350px;
}
</style>
