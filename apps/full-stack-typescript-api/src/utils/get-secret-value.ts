import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
const secrets = new SecretManagerServiceClient();

export async function getSecretValue(name: string) {
	const [version] = await secrets.accessSecretVersion({
		name: `projects/1068134169350/secrets/${name}/versions/latest`
	});

	const payload = version.payload?.data?.toString();
	return payload;
}
