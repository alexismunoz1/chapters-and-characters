## Deployment

Hosting on https://chapters-and-characters.vercel.app/

## Installation

Install the project with npm or yarn

```bash
  npm i && npm run dev
  or
  yarn && yarn dev
```

## Technologies

- Next js
- React
- Typescript
- [React query](https://tanstack.com/query/latest): Fetching, caching and updating asynchronous data.
- [Zustand](https://zustand-demo.pmnd.rs/): State management.
- [Styled-components](https://styled-components.com/): Css components.

## Architecture

The architecture of this project is based on layers

#### Layers

- Although there are multiple ways to organize a code base, layers offer us an intuitive way to organize our components.

- Layers are actually an arbitrary separation where we separate our components into groups based on how information flows

#### Path

- The URL or the path within our webapp is the first layer since it is here where the user tells our app what he wants to do. Either typing the path or clicking a button that takes you to this path, the path is the first "atom" of our great state made up of hooks and other herbs.

#### Pages

- The first layer that involves code in our webapp is the pages layer. The web is managed with pages, whether it is a SPA or an MPA, eventually we have different scenarios and those scenarios are very different entry points from each other. This layer is very close to the URL layer since each path is linked to a component that is responsible for "mounting" that page.

- To maintain order we can establish that pages are the only ones that should be able to input data from the URL and pass that data to the rest of the system using props or some other mechanism. The pages do not define the behavior itself, but are the bridge between the information that is in the URL and the next layer that is the components.

#### Components

- The component layer is responsible for defining the most complex functional blocks of our webapp. A component in this layer should not assume anything about its environment. It should work in the context we need it to. So they need to be as plug and play as possible. You must be very careful when building cross-dependencies on this layer. It is very tempting to reuse a component from this layer in another from the same layer to generate more complex or improved versions.

- What must be taken into account is that if component A imports component B, these two components will be linked forever and everything we do in component B could affect component A. That is why we try to make these components as independent as possible. possible one from the other since with this we will achieve better scalability. When creating these components we are going to use all the basic bricks of our system such as libs, hooks and ui.

#### UI

- This layer is the one that contains the basic bricks of our system. If we want to see it from the point of view of atomic design, these would be the atoms. They are very small components in terms of responsibility and since they do not have very complex functionalities they are reused everywhere.

- The entire layer acts as one big block of small reusable components. That is why the components of this layer can be imported from each other, since being part of a sub-system, it is very likely that this whole layer will stay together until the end.
