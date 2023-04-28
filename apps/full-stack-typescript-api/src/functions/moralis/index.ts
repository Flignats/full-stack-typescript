import { EvmChain } from '@moralisweb3/common-evm-utils';
import Moralis from 'moralis';
import { getSecretValue } from '../../utils/get-secret-value';

export async function onGetBalance(data: any, context) {
	const mySecret = await getSecretValue('moralis');

	Moralis.start({
		apiKey: mySecret
	});

	const result = await Moralis.EvmApi.balance.getNativeBalance({
		chain: EvmChain.ETHEREUM,
		address: data.address
	});

	return {
		balance: result.result.balance.ether
	};
}
