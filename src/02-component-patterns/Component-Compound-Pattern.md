# What Is A Compound Component?
Compound components can be said to be a pattern that encloses the state and the behavior of a group of components 
but still gives the rendering control of its variable parts back to the external user.

The objective of compound components is to provide a more expressive and flexible API for communication between 
the parent and the child components.

## When Should You Make Use Of Compound Components? #
As a React developer, you should make use of compound components when you want to:

Solve issues related to building reusable components;
Development of highly cohesive components with minimal coupling;
Better ways to share logic between components.

Pros And Cons Of Compound Components #
A compound component is an awesome React pattern to add to your React developer toolkit. In this section, I’ll state 
the pros and cons of using compound components and what I have learned from building components using this pattern of development.

### PROS #
Separation Of Concern
Having all the UI state logic in the parent component and communicating that internally to all the child components 
makes for a clear division of responsibility.

Reduced Complexity
As opposed to prop drilling to pass down properties to their specific components, child props go to their respective 
child components using the compound component pattern.

### CONS #
One of the major cons of building components in React with the compound component pattern is that only direct 
children  the parent component will have access to the props, meaning we can’t wrap any of these components 
in another component.