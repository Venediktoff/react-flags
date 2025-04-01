# React Flags

A **tree-shakable** React library for displaying world flags as SVG components.

## 🚀 Features

- **Tree-shaking support** – Only import the flags you need
- **Optimized for performance** – No unnecessary dependencies
- **Easy to use** – Simple React components
- **SVG-based** – High-quality, scalable flags

## 📦 Installation

```sh
npm install @venediktoff/react-flags
```

or with Yarn:

```sh
yarn add @venediktoff/react-flags
```

## 📖 Usage

Import only the flags you need:

```tsx
import React from 'react';
import { FlagUS } from '@venediktoff/react-flags';

const App = () => (
  <div>
    <FlagUS />
  </div>
);

export default App;
```

## 🛠 Setup & Development

### 1. Clone the Repository

```sh
git clone https://github.com/venediktoff/react-flags.git
cd react-flags
```

### 2. Install Dependencies

```sh
npm install
```

## 🏗️ How It Works

Each flag is exported individually to allow **tree-shaking**, meaning only the imported flags are included in the final bundle.

## 📜 Available Flags

Flags are named using their **ISO 3166-1 alpha-2 country codes**. Example:

```tsx
import { FlagUS } from '@venediktoff/react-flags';
```

For a full list of supported flags, check the [`flags` directory](https://github.com/venediktoff/react-flags/tree/main/src/components/flags).

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.

---

Made with ❤️ by Ivan Venediktov
