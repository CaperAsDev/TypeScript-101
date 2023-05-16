# 📚TypeScript introduction [^1]
## 😵‍💫How to start?
*I personally start by watching some videos explaining what is Typescript and why to learn it, i recommend doing so because you'll already know what is this all about.*
1. One easy way to start is using [Vite](https://es.vitejs.dev/guide/): according to the documentation with the command **npm create vite@latest** and follwing the indications you'll setup everything ready to start working.

2. Installing [TypeScrpt](https://www.typescriptlang.org/download) into your project with the command: **npm install typescript --save-dev**

- Before installing typeScript, you'll need to start Node **npm innit**.

## 😎Cool, what's next?
After installing TypeScript, you should set the tsconfig.json file. 
- The **tsc** command is the *TypeScript Compiler* so it'll turn your file.**ts** file into a file.**js** file following the configuration specified in the **tsconfig.json**. 
- The tsconfig.json file is created by running **tsc --init**. This command will create the file with a lot of configurations commented so you can uncomment the ones you want to apply to your configuration.

Some configuration for the tsconfig.json file are:
- outDir: the directory where compiled files will be emitted.
- rootDir: the common path of your **.ts** files.

With the command **npx tsc --watch** you track changes in your **.ts** files to compile with every change *(save)*.

*Note*: The tsconfig.json file is already created when you use **Vite** so if want to compile you should use **npm run build**, using *npx tsc* will not work beacause of the ("noEmit": true) in the tsconfig.json file created by Vite, also *npx tsc --watch* won't have any effect in your project.

## 🪢Types
To explain types in TypeScript i will use the [types.ts](./src/types.ts) file.

[^1]: This file is the result of me following a course, this is not a proffesional explanation or so. If something i wrote down is wrong please tell me where i'm wrong, so i can learn properly 🥸. Thanks😁.
