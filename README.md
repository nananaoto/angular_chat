# SecondAngularChat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 追加
環境構築などはpdf参照
書いてある以外に[オートスクロールのプラグインのインストール](https://www.npmjs.com/package/@nicky-lenaers/ngx-scroll-to)が必要

```
npm install -g @angular/cli
npm i bootstrap --save
npm install @nicky-lenaers/ngx-scroll-to
npm install -g firebase-tools
npm install firebase @angular/fire --save
```

angular.jsonを修正
```
"styles": [
 "src/styles.css"
]
```
から
```
"styles": [
 "node_modules/bootstrap/dist/css/bootstrap.css",
 "src/styles.css"
]
```
