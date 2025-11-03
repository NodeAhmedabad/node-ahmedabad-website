# Contributing

Thank you for considering contributing to `node-ahmedabad-website`. We welcome all contributions, whether it’s fixing a bug, improving documentation, or suggesting a feature.

## How to Contribute

### 1. Fork & Clone the Repository

```sh
$ git clone https://github.com/NodeAhmedabad/node-ahmedabad-website.git
$ cd node-ahmedabad-website
```

### 2. Install Dependencies

Check the `.nvmrc` file for the required Node.js version. For `pnpm` version, see the `packageManager` field in the root `package.json`. Install dependencies with:

```sh
$ pnpm install
```

### 3. Making Changes

- Always create a new branch:

  ```sh
  $ git checkout -b fix/your-change
  ```

- For docs → check formatting and verify links.

### 4. Linting & Formatting

Run checks and fixes before committing:

**Checks**

```sh
$ pnpm lint
$ pnpm format:check
```

**Fixes**

```sh
$ pnpm lint:fix
$ pnpm format:fix
```

### 5. Commit Guidelines

We follow **Conventional Commits** for a clean commit history. Examples:

- `feat: implement ESM functionality`
- `fix: resolve path alias issue`
- `docs: update installation steps`

### 6. Running Scripts

Before pushing, ensure all scripts pass:

```sh
$ pnpm script:lint
```

### 7. Submitting a PR

- Push your branch and open a Pull Request against `canary`.
- Clearly describe the problem, your solution, and reference any related issues/discussions.
- Maintainers will review, suggest improvements if needed, and merge once approved.

## Code of Conduct

This project follows a [**Code of Conduct**](https://github.com/NodeAhmedabad/node-ahmedabad-website/blob/master/CODE_OF_CONDUCT.md). Please be respectful, collaborative, and inclusive.

## Suggestions & Issues

- Found a bug? → [Open an Issue](https://github.com/NodeAhmedabad/node-ahmedabad-website/issues/new/choose)
- Want a new feature or rule? → Use the same link to create an issue, or start a discussion before opening a PR.
