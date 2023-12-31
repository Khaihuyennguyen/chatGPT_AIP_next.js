# AI Integration for the Web: ChatGPT 

Hello! To run this project:

- Open this project in a code editor, such as VS Code, if you haven't done already
- Open a terminal to run code within this project and go to the project's root. If you're using VS Code, you can do this by opening up a new terminal in the menu (Terminal > New Terminal)
- We will need to install the packages within the project.
  - If you are using NPM, run `npm install`
  - If you're using Yarn, run `yarn install`
- Next we will want to run the server to see this on the web. This should make your site run at http://localhost:3000 or http://0.0.0.0:3000
  - If you are using NPM, run `npm run dev`
  - If you are using Yarn, run `yarn dev`



## API keys

For this project, you will also need to sign up to the [OpenAI platform](https://platform.openai.com). Currently, you get free credits to try out their APIs.

## Going live

To make the project live on the internet, you will need to use a web host that supports Next.js websites. We recommend using [Vercel](https://vercel.com) which makes it super simple to get online.

Vercel works closely with Git and top Git providers like GitHub. Once you're ready to launch, send your code to an online Git repository.

To do this, sign up for a Vercel account, link your Git account to Vercel, and then Vercel will give you an option to import your project.

You will need to add an Environment Variable to your project for the Open AI secret key for use in this project. By default, .env.local files don't get added to Git for security reasons (a good thing!) so you will need to add it manually.
