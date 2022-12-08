<template>
	<ui-card class="supportCard">
		<ui-header :size="3">Поддержка творчества</ui-header>
		<div class="textBlock">
			<ui-text>
				Как и любая другая творческая деятельность, "plskn.ru" нуждается в
				поддержке с вашей стороны.<br />
				Оставляйте <b>комментарии</b>, делитесь <b>ссылками</b> на любимые
				стихотворения, отправляйте <b>добровольные пожертвования</b>.
				<br /><br />
				Мы ценим любую поддержку:
				<ul class="supportList">
					<li>
						Комментарии под стихотворениями помогут нам выявить удачные
						произведения;
					</li>
					<li>
						Распространение ссылок на этот ресурс повысит общую узнаваемость
						автора;
					</li>
					<li>
						Материальные пожертвования откроют перед нами новые горизонты в
						способах продвижения творчества;
					</li>
				</ul>
				<wallet-block />
			</ui-text>
		</div>
	</ui-card>
</template>
<script lang="ts">
import WalletBlock from './WalletBlock.vue';

export default {
	components: {
		WalletBlock,
	},
	data() {
		return {};
	},
};
</script>
<style scoped>
.textBlock {
	margin-top: 10px;
}
.supportCard {
	margin: 0 auto;
	max-width: 450px;
}
.supportList {
	padding-left: 20px;
	list-style: circle;
}
</style>
