![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)


# Uni Localization

```html
<uni-lang-menu url="https://uni.github.io/loc/i18n/lang-menu.json"></uni-lang-menu>
<uni-translate>This content is localized</uni-translate>
```

Uni Localization is a set of Web Components & Custom Elements to add multilingual support and customize it in the declarative style.

Uni Localization components have two modes:
1. Custom Element - `100%` convenience;
2. Web Component - `100%` security;
3. Custom Element with 'only' prop - `100%` customization;

Uni Localization takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components & Custom Elements that run in any browser supporting the Custom Elements v1 spec.

Uni Localization components are just HTML Web Components & Custom Elements, so they work in any major framework or with no framework at all.

## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/uiwebkit/loc.git uni-localize
cd uni-localize
```

and run:

```bash
npm i
npm run serve:dev
```

To build the component for production, run:

```bash
npm run build:prod
```

Check out our docs [here](https://uiwebkit.com/wgt/loc/2).


## Naming Components

When creating new component tags, use `uni` in the component name (ex: `<uni-translate>`) or use a prefix that fits your company or any name for a group of related components. For example, all the UiWebKit generated Web Components & Custom Elements use the prefix `uni`.


## Using Components

There are two strategies we recommend for using Uni Localization:

### Script tag

- Put a script tag `<script type="module" src="https://cdn.jsdelivr.net/npm/@uiwebkit/loc@latest/dist/loc/loc.esm.js"></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm i @uiwebkit/loc --save`
- Put a script tag similar to this `<script type="module" src="node_modules/@uiwebkit/loc/dist/loc/loc.esm.js"></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc
