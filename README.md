# code-narrator-turbo

## Description

[code-narrator-turbo](https://github.com/ffrappo/code-narrator-turbo) uses OpenAI to generate documentation for your source code, as well as create HowTo, FAQ, Tutorial, and other custom pages. code-narrator-turbo documents itself and should be a validation of the documentation working, similar to a compiler compiling itself. Configuration `code-narrator-turbo.config.js` file is created on first run and sets the configuration for your project, such as project path, doc, documentation type, and more. The package can be installed using `npm i code-narrator-turbo -D`. code-narrator-turbo is code language, linguistic & framework neutral. It keeps your documentation always up to date.

## Getting Started

1. Install the package:

```bash
npm i code-narrator-turbo -D
```

2. Move to your project directory.
3. Create a `.env` file there (if it doesn't exist) and add your `OPENAI_API_KEY=****`.
4. Run code-narrator-turbo:

```bash
npx code-narrator-turbo
```
5. The first run is setup only. The second will start creating documentation.


## Usage

After installing the package and running it for the first time, a `code-narrator-turbo.config.js` file will be generated. You can customize this file to configure the documentation generation for your project.

## Repository

[code-narrator-turbo Repository](https://github.com/ffrappo/code-narrator-turbo)

## Documentation

- [Main Documentation](https://github.com/ffrappo/code-narrator-turbo/tree/master/docs)
- [FAQ](https://github.com/ffrappo/code-narrator-turbo/tree/master/docs/FAQ.md)
- [How-to Guides](https://github.com/ffrappo/code-narrator-turbo/tree/master/docs/howto)
- [Tutorials](https://github.com/ffrappo/code-narrator-turbo/tree/master/docs/tutorial)

## Report Issues

If you encounter any issues or have suggestions, please report them [here](https://github.com/ffrappo/code-narrator-turbo/issues).


## Version

1.0.30

## License

ISC