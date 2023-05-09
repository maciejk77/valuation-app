## My Notes

1. Valuation changes section added, styled as per mock up provided
2. Fetching data from /api/account API endpoint implemented (previously static object mock)

## Questions

1. Given more time, what other changes you would have liked to make?

Code-wise, keep state in context, create reusable useFetch hook for api with try/catch for larger app, here simple fetch should suffice
Is there local state/store ie. Redux, ideally use of Redux Toolkit with React Query?
Is there a need for app to be optimised for SEO, server side rendering with Next i.e getServerSideProps

2. What UX or design improvements or alterations might you suggest? These can be to existing components or completely new ideas.

Use of icons i.e. house, showing completion stage ie. how many more years as a percentage value to repay in full
Use of graphs, chart libraries to visualise data i.e. Highcharts or similar
Access to historical API data (i.e zoopla) to visualise how price has changed over time, slider to see YoY changes?
Collapsible sections, to allow focus on one or couple/few selected

## Requirements

**Required**: Add a "Valuation changes" section to the page. `design-mock-up.png` has been provided as a design reference for the page and `detail-design-mock-up.png` shows the specific feature to be added, including how it is styled responsively. Make use of existing fonts and styles to match the look and feel of the existing app rather than trying to match the mock up exactly.

```
 sincePurchase = `recentValuation - originalPurchasePrice`
 sincePurchasePercentage = `sincePurchase / originalPurchasePrice * 100`
 annualAppreciation =`sincePurchasePercentage / number of years since purchase`
 colours used for the positive change in the image are #c2f7e1 and #006b57
```

Consider what other data this component could take and how that might affect your theming and solution

Consider opportunities to reduce repetition in the code and increase legibility

- This could be creating new components, simplifying existing ones, extracting helper function to simplify code or styling
- Show us what you can do and implement a few of these if you have time

We also ask that you update the readme with answers to the following questions

1. Given more time, what other changes you would have liked to make?
2. What UX or design improvements or alterations might you suggest? These can be to existing components or completely new ideas.

---

**Optional**: If you have time, show us some more by fetching the data from the api

- Currently the property data is hardcoded in the component, but it is also avaible via a Next.js api route
- Details of a property are located in the API at `/api/account`, use this endpoint to populate the app with data
- Use whichever method or library you are comfortable with to fetch the data

---

Try to:

- Ensure markup is semantic and accessible
- Make use of a centralised theme
- Make effective use of Git

We prefer:

- Functional React components
- `styled-components` for styling
- `prop-types` for typechecking

---

**IMPORTANT**

Most of your work should take place inside the `components/` and `modules/` directory. There are some example components and styles available and the theme is defined in `theme/`. This task has been mocked up in Next.js to provide a full working environment and as such shouldn't be taken as a _complete_ application. We are interested in assessing your React frontend skills and are not testing your knowledge of Next.js, you should not need to make any changes in the `pages/` directory.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3333](http://localhost:3333) with your browser to see the result.

You can start by looking at `modules/property-details/index`. The page auto-updates as you edit the file.
