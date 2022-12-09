export interface ITabs {
	name: string;
	href: string;
	icon: any;
}
export interface IPoem {
	id: string;
	title: string;
	body: string;
	add_date: string;
}
export interface IShare {
	name: String;
}
interface IWallet {
	name: String;
	number: String;
}
export interface ISupport {
	name: String;
	disabled: Boolean;
	wallets: IWallet[];
}
