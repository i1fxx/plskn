export interface INote {
	id: number;
	title: string;
	body: string;
}
export interface ITabs {
	name: string;
	href: string;
	icon: any;
}
export interface IPoem {
	id: number;
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
