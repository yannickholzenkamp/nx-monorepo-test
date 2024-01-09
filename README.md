# Test of Nx monorepo 

## Setup
- 2 Angular applications ("gugus-a" & "gugus-b")
- 1 Angular library ("is-hans")

## Documentation
https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial

## Commands

Run an app:
```
nx serve gugus-a
```

Add an app:
```
npx nx g @nx/angular:app gugus-y --directory=apps/gugus-y --dry-run
```
(Remove --dry-run parameter)

Add a library:
```
nx g @nx/angular:library is-hans --directory=libs/is-hans --standalone
```

Visualizing the project:
```
nx graph
```

Testing everything:
```
nx run-many -t test lint
```

Building everything:
```
npx nx run-many -t build
```