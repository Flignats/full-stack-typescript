# A Full Stack Typescript Starter with Nrwl/NX, Angular 15, NgRx, Node, Google Cloud Provider services, and Web3

by [@TheRealFlignats](https://twitter.com/TheRealFlignats)

## Table of Content

- [Live Demo](https://fullstacktypescript.app/)
- [Getting Started](#getting-started)
- [Useful Commands](#useful-commands)
- [Make It Your Own](#make-it-your-own)
- [Goals and Features](#goals)
- [Stack](#stack)

## Live Demo

[Demo application](https://fullstacktypescript.app/)

## Getting Started

```bash
git clone --- new-project
cd new-project
npm install --legacy-peer-deps
npm start
```

## Useful Commands

- `firebase deploy --only functions` - build and deploy the API Google Cloud Functions to the Firebase project
- `firebase deploy --only hosting` - deploy the client application to Firebase hosting
- `npm run analyze:{{project}}` - runs full prod build and `webpack-bundle-analyzer` to visualize how much code is shipped (dependencies & application)
- `npm run build:{{project}}` - runs a production build of the client application
- `npm run format` - runs prettier to format apps and libs directories (`.ts` and `.scss`)

## Make It Your Own

To configure this repository for use with your own projects and Firebase account follow the following steps:

[Application guide](https://fullstacktypescript.app/documentation/getting-started)
[Gitbook reference](https://flignats.gitbook.io/full-stack-typescript/getting-started-with-the-full-stack-typescript-repository)

## Goals

The main goal of this repository is to provide up to date examples for a full-stack application enabling enterprise-grade development following all recent best practices in various areas and features, such as:

- nx monorepo - open-source build system that provides tools and techniques for enhancing developer productivity, optimizing CI performance, and maintaining code quality
- typescript - leverage typescript, e2e, for client and server-side development
- authentication - complete sign-up and account management system with Firebase Authentication
- cloud firestore - flexible, scalable NoSQL cloud database to store and sync data for client and server-side development
- cloud functions - automatically run backend code in response to events triggered by Firebase features and HTTPS requests in a safe, secure manner
- web3 - real-world examples to interact with Web3 and blockchain technology through the Moralis Api
- progressive web application - use service workers, manifests, and other web-platform features in combination with progressive enhancement to give users an experience on par with native apps
- push notifications - cross-platform messaging solution that lets you reliably send messages to desktop, mobile, and web applications
- icons - easy, performant customizable icon solution that doesn't sacrifice quality and maintains brand requirements
- documentation - extensive documentation of development best practices, workflows, and guides that educate and inform users on how to achieve development goals
- `@ngrx/store` - state management including reducers, actions, selectors
- `@ngrx/effects` - for implementation of side effects like `http` requests, logging, notifications, analytics, ect
- `@ngrx/router-store` - to connect the Angular Router to @ngrx/store
- `@ngrx/store-devtools` - to enable a powerful time-travelling debugger.
- `@angular/material` - material design component library, theming, rapid UI development
- routing
- Angular CLI configuration (prod build, budgets, ...)

## Stack

- Nx monorepo
- Typescript
- Angular
- Angular Material
- Scss
- NgRx
- Node
- Google Cloud Provider services
  - Firebase Authentication
  - Firebase Hosting
  - Firestore Database
  - Firebase Cloud Messaging
  - Google Analytics
- Web3 with Moralis