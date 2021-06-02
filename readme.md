1. download and install [NodeJS](https://nodejs.org/en/download/)
    - Windows: default location is `C:\Program Files (x86)\nodejs\`
    - Windows: in the **Tools for Native Modules** screen, check the box to allow automatic installs
2. after installation is complete, open your command prompt and type `node` -- you should see `Welcome to Node.js v14.17.0.`
    - press Ctrl+C twice to exit
3. next, type `npm install --global ts-node`
    - installs `typescript`, which is a version of javascript that has support for explicit datatypes
4. next, type `npm install --global yarn`
    - `yarn` is a package manager
5. go to the [typescript-starter-tutorial](https://github.com/kaisershahid/typescript-starter-tutorial/releases/tag/0.0.1) repository and download the zip file of the latest source
6. unzip into some directory, then change into that directory in the command prompt
7. run `yarn install`
8. if there are no errors, type `ts-node src/basic-01-vars-types.ts`
    - you should see various output and no error codes/messages

## Other Resources

-   [tutorialspoint: nodejs](https://www.tutorialspoint.com/nodejs/index.htm)
-   [tutorialsteacher: nodejs](https://www.tutorialsteacher.com/nodejs/nodejs-tutorials)
