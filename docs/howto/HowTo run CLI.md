# How to Use code-narrator-turbo

## Introduction

code-narrator-turbo is a powerful tool for generating documentation for your software projects. This guide will walk you through the process of installing, configuring, and running code-narrator-turbo to generate documentation for your project.

## Step-by-Step Instructions

### Step 1: Install code-narrator-turbo

To install code-narrator-turbo, run the following command in your terminal:

```bash
npm install code-narrator-turbo -D
```

### Step 2: Run code-narrator-turbo

To run code-narrator-turbo, execute the following command:

```bash
npx code-narrator-turbo
```

### Step 3: Configure code-narrator-turbo

On the first run, code-narrator-turbo will create a configuration file. Make sure to read and edit the configuration file before generating documentation. You can find the documentation for the configuration file at [code-narrator-turbo Configuration](https://github.com/ffrappo/code-narrator-turbo/blob/master/docs/Configuration/code-narrator-turbo.config.js.md).

### Step 4: Use Arguments to Customize the Run

You can use the following arguments when running code-narrator-turbo to customize the documentation process:

- `--config` or `-c`: Path to the configuration file (JSON or JavaScript)
- `--include` or `-i`: Only include specific files or folders in the documentation process
- `--gpt` or `-g`: GPT model (default is `gpt-4-1106-preview`, if you do not have access, the next best option is `gpt-3.5-turbo`)
- `--userDefined` or `-u`: Runs only update on userDefined builder from config matching template name

For example, to run code-narrator-turbo with a custom configuration file and include only specific files or folders, use the following command:

```bash
npx code-narrator-turbo -c path/to/your/config.js -i path/to/include/folder
```

## Conclusion

By following these steps, you can successfully install, configure, and run code-narrator-turbo to generate documentation for your software projects. Make sure to review the configuration file and use the available arguments to customize the documentation process as needed.