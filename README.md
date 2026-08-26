# Landing Page

A temporary home for our landing page while we gather user feedback and improve the site.

## Current Status

This repo currently contains the landing page, which mostly uses placeholder content for now.

## Table of Contents

- [Getting Started](#getting-started)
- [Running the Dev Server](#running-the-dev-server)
- [Project Structure](#project-structure)
- [How to contribute](#how-to-contribute)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes bundled with Node.js)

### Clone the Repo

```bash
git clone https://github.com/NFDI-Jupyter/website-dev.git
cd website-dev
```

### Install Dependencies

```bash
npm install
```

## Running the Dev Server

Start a hot-reloading development build with:

```bash
npm run dev
```

Once running, open the site in your browser at:

```
http://localhost:5173/website-dev/
```

Any changes you make to the code will show up instantly, no manual refresh needed.

## Project Structure

```
├──app/
|  ├── components/
|  ├── data/
|  │   ├──── Consortia.ts
|  |   ├──── Features.ts
|  |   ├──── Hero.ts
|  |   ├──── Incubators.ts
|  |   ├──── Mission.ts
|  |   ├──── Training.ts
|  |   └──── {Any new section which might be added in the future}
|  ├── hooks/
|  └── routes/
├──docs/
└──public/
```
- **`app/`** — This folder contains the source code for the main landing page
- **`app/components/`** — This folder contains reusable or site spanning components like AnimatedButton, Footer or Header
- **`app/data/{nameOfSection}`** — Each section of the landing page pulls its content from a corresponding typescript file here. This is the primary place to edit, copy links, and change other section-specific content.
- **`app/hooks/`** — this side spanning hooks
- **`app/routes/`** — This contains the structure of the site 
- **`docs/`** — This folder contains the files needed to build the documentation
- **`public/`** — This folder contains the images shipped with the site which can be used from source code directly
--

## How to contribute

### To update or add content for a section:

1. Start the development build of the website with `npm run dev` and open the site `http://localhost:5173/website-dev/` in your browser of choice 
2. Locate the relevant file for the section under `app/data/{nameOfSection}.ts`.
3. Edit the data file following the existing format.
4. Check for your changes in the browser.
5. Commit your changes and open a pull request for review.

**In case styling is way off or you need certain changes in the site feel free to let me know in the pull request so that I can adjust the styling**

### Changing or adding icons
if you adding or changing icons check out the icons available under `https://react-icons.github.io/react-icons/icons/lu/`

1. Add the name of the icon you want to import in the imports of icons at the top of the file.
2. Use the name of the icon in the specified field where you want to use the icon.