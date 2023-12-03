export default function (plop) {
  plop.setGenerator("container", {
    description: "Create a React container",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your container name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/containers/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/containers/{{pascalCase name}}/{{name}}.scss",
        templateFile: "plop-templates/Component.scss.hbs",
      },
      // {
      //   type: "append",
      //   path: "src/containers/index.ts",
      //   pattern: `/* PLOP_INJECT_EXPORT */`,
      //   template: `export { default as {{pascalCase name}} } from "./{{pascalCase name}}/{{pascalCase name}}";`,
      // },
      //   {
      //     type: "add",
      //     path: "src/components/{{pascalCase name}}/index.js",
      //     templateFile: "plop-templates/index.js.hbs",
      //   },
    ],
  });
  plop.setGenerator("component", {
    description: "Create a React components",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{name}}.scss",
        templateFile: "plop-templates/Component.scss.hbs",
      },
      //   {
      //     type: "add",
      //     path: "src/components/{{pascalCase name}}/index.js",
      //     templateFile: "plop-templates/index.js.hbs",
      //   },
    ],
  });
}
