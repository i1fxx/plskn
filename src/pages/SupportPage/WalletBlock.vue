<template>
	<div class="walletBlock">
		<ui-header :size="4">
			<wallet-icon size="18" class="walletIcon" />
			Кошельки:
		</ui-header>
		<ul class="walletList">
			<li v-for="wallet of supportType.wallets">
				<ui-button type="primary" @click="copyHandler(wallet)">
					{{ wallet.name }}
				</ui-button>
			</li>
		</ul>
	</div>
</template>
<script lang="ts">
import {
	CurrencyBitcoinIcon,
	CurrencyEthereumIcon,
	WalletIcon,
} from 'vue-tabler-icons';
import { ISupport } from '@/types/index';
import { defineComponent } from 'vue';
import { copyText } from 'vue3-clipboard';
interface IWallet {
	name: String;
	number: String;
}
export default defineComponent({
	components: {
		CurrencyBitcoinIcon,
		CurrencyEthereumIcon,
		WalletIcon,
	},
	data() {
		return {
			supportType: <ISupport>{
				name: 'Crypto',
				disabled: false,
				wallets: [
					{
						name: 'Ethereum',
						number: '0x87a0eA3ef45A3de753C893EA94d57aa749Af11FE',
					},
					{
						name: 'Bitcoin',
						number: 'bc1q2m5w0z4rxxkn5hl0xw8uj6syslmd0ec66t9qje',
					},
				],
				copied: 'Ethereum',
			},
		};
	},
	methods: {
		copyHandler(wallet: IWallet) {
			copyText(wallet.number, undefined, (error, event) => {
				if (error) {
					alert('Can not copy');
				} else {
					alert(`${wallet.name} кошелек скопирован!`);
				}
			});
		},
	},
});
</script>
<style scoped>
.walletBlock {
	margin-top: 15px;
}
.walletList {
	list-style: none;
	display: inline;
}
.walletList > li {
	display: inline-block;
	margin: 10px;
}
.walletList > li:not(:first-child) {
	margin-left: 5px;
}
.walletIcon {
	float: left;
	margin-right: 5px;
}
</style>
