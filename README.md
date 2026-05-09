# React Developer Tools Checkpoint

## Project Overview

This project was created to practice debugging React applications using React Developer Tools. The application was built with React and Vite and includes reusable components, props, and state management.

---

# What I Built

I created a simple React application that contains:

- A counter using React state
- Reusable UserCard components
- Props passed between components
- Interactive button functionality

---

# Tools Used

- React
- Vite
- React Developer Tools
- Visual Studio Code
- Google Chrome

---

# Debugging Process

I used React Developer Tools to inspect the React component tree and analyze component props and state.

I inspected the UserCard components and discovered that one component was missing the age prop.

Incorrect code:

jsx <UserCard name="Sarah" /> 

Because the age prop was missing, the component could not display the correct information.

I fixed the issue by updating the component:

jsx <UserCard name="Sarah" age={30} /> 

After fixing the issue, the component rendered correctly.

---

# State Inspection

I also inspected the count state in the App component using React Developer Tools.

The counter updated correctly when clicking the button.

---

# What I Learned

Through this project, I learned:

- How to install and use React Developer Tools
- How to inspect React components
- How to inspect props and state
- How to identify missing props
- How to debug React applications
- How React state updates work

---

# Conclusion

The project was successfully debugged using React Developer Tools. All issues were identified and fixed successfully, and the application works correctly.
