Portfolio_Web/
│
├── app/                      # Main directory for application content
│   ├── about/                # Contains components specific to the 'About' page
│   │   └── page.tsx          # React component for the 'About' page
│   ├── blog/                 # Contains components specific to the 'Blog' page
│   │   └── page.tsx          # React component for the 'Blog' page
│   ├── contact/              # Contains components specific to the 'Contact' page
│   │   └── page.tsx          # React component for the 'Contact' page
│   └── ui/                   # Directory for UI components used across different parts of the application
│       ├── Header/           # Header component
│       │   ├── index.tsx     # Entry point for the Header component
│       │   └── style.module.scss  # SCSS module for styling the Header component
│       ├── Nav/              # Navigation component
│       │   ├── index.tsx     # Entry point for the Nav component
│       │   └── style.module.scss  # SCSS module for styling the Nav component
│       ├── Link/             # Link component (possibly for routing)
│       │   ├── index.tsx     # Entry point for the Link component
│       │   └── style.module.scss  # SCSS module for styling the Link component
│       └── Landing/          # Components specific to the Landing section of the site
│           ├── index.tsx     # Main file for Landing components
│           └── style.module.scss  # SCSS module for styling the Landing components
│
├── work/ 
│   ├── page.tsx                    
├── layout.tsx            # Layout component for the app 
├── page.tsx              # Individual pages for app
├── _variables.scss       # SCSS variables globally available
├── globals.scss          # Global styles for the app s
└── page.module.scss      # SCSS module for specific pages in the app 
│
├── .next/                    # Generated automatically by Next.js during build (not typically checked into version control)
├── node_modules/             # Node modules installed (also not checked into version control)
├── public/                   # Static assets like images and icons
├── .eslintrc.json            # ESLint configuration for linting the code
├── .gitignore                # Specifies files to ignore in version control
├── next-env.d.ts             # TypeScript declarations specific to Next.js
├── next.config.mjs           # Configuration file for Next.js (using Module JavaScript syntax)
├── package-lock.json         # Automatically generated file for npm dependencies to lock the versions
├── package.json              # Manages project dependencies, scripts, and more
├── README.md                 # Markdown file providing an overview of the project
└── tsconfig.json             # Configuration file for TypeScript
