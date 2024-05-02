# React + Vite

## Create a react app with Vite.
Command used was
npx create-vite react-vite-test --template react

## Setup with Sass
Must install "Live Sass Compiler" in VSCode, will have a watch.

## Configure Sass in VSCode

Open up settings, then open JSON and add the config section

```
    "liveSassCompile.settings.autoprefix": [],
    "liveSassCompile.settings.excludeList": [
        "/**/node_modules/**",
        "/.vscode/**"
    ],
    "liveSassCompile.settings.generateMap": false,
    "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "/src/assets/css/"
        },
        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "/src/assets/css/"
        }
    ]
```


## Node version
v20.12.2