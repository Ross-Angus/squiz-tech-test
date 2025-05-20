We would like you to create an interactive dashboard that visualizes data from an API. The dashboard should provide users with key insights and allow them to interact with the data dynamically.

## Requirements:

* Fetch data from https://dujour.squiz.cloud/developer-challenge/data.
* Display the data using a combination of charts, tables, and key statistics.
* Implement the following interactive features:
  * Filtering: Allow users to filter data by “country” and “industry”.
  * Sorting: Enable sorting by “name” and “numberOfEmployees” in both ascending and descending order.
  * Search: Provide a search bar to quickly find records by name.
* Ensure a responsive design:
  * Desktop: Use a multi-column layout with filters on the left and visual elements on the right.
  * Mobile: Use a stacked layout with filters at the top and visual elements below.
* Use data visualization tools to create at least one interactive chart (e.g., a bar chart for employees per industry or a pie chart for country distribution).
* Ensure smooth UX/UI, including animations or transitions where appropriate.
* Follow best practices for tools, code structure, formatting, and performance.
* The application should be built using either:
  * HTML, CSS, and JS/TS, or
  * React with JSX.
* You may use libraries for UI components and data handling, but avoid using jQuery.

## Bonus (Optional):

* Implement pagination or infinite loader.
* Try to persist user preferences (e.g., selected filters).

## Submission:

Host your completed challenge on GitHub and share the repository link with us.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
