import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as functions from 'firebase-functions';
import { AppModule } from './app/app.module';
import * as accountFunctions from './functions/account';
import * as authFunctions from './functions/auth';
import * as moralisFunctions from './functions/moralis';

const server = express();

export const createNestServer = async (expressInstance) => {
	const app = await NestFactory.create(
		AppModule,
		new ExpressAdapter(expressInstance)
	);

	return app.init();
};

createNestServer(server)
	.then((v) => console.log('Nest Ready'))
	.catch((err) => console.error('Nest broken', err));

export const api = functions.https.onRequest(server);

export const angularexamplesFunctionsTest = functions.https.onRequest(
	(request, response) => {
		response.send('Hello from Firebase!');
	}
);

// Account
export const onUpdateAccount = functions.https.onCall((data, context) => {
	return accountFunctions.onUpdateAccount(data, context);
});

export const onUpdateAccountTokens = functions.https.onCall((data, context) => {
	return accountFunctions.onUpdateAccountTokens(data, context);
});

// Auth
export const onNewUserCreated = functions.auth
	.user()
	.onCreate(function (user, context) {
		return authFunctions.onNewUserCreated(user, context);
	});

// Moralis
export const onGetBalance = functions.https.onCall((data, context) => {
	return moralisFunctions.onGetBalance(data, context);
});
