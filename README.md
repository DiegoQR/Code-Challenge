# RAVN React Code Challenge

This is a task management app that allows to manage diferent tasks for a multiple devlopment team as part as as the code challenge porposed.

<details>
    <summary><strong>Setup/Running Instructions</strong></summary>

Before running the app you will **need to create an .env file in the root** of the proyect, which will need to have the following parameters:
```
REACT_APP_API_TOKEN=<YOUR API TOKEN HERE>
REACT_APP_API_URL=<THE API URL HERE>
```

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

</details>
<details>
    <summary><strong>Screenshots</strong></summary>
</details>
<details>
    <summary><strong>Project Structure</strong></summary>
</details>
<details>
    <summary><strong>Technologies/libraries</strong></summary>

## React <img height="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png">
React is a JavaScript library for building user interfaces, particularly single-page applications (SPAs). It was developed by Facebook and released as an open-source project in 2013. React is known for its declarative and component-based approach, making it easier to create interactive UIs.

## Mantine <svg height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 163 163"><path fill="#339AF0" d="M162.162 81.5c0-45.011-36.301-81.5-81.08-81.5C36.301 0 0 36.489 0 81.5 0 126.51 36.301 163 81.081 163s81.081-36.49 81.081-81.5z"/><path fill="#fff" d="M65.983 43.049a6.234 6.234 0 00-.336 6.884 6.14 6.14 0 001.618 1.786c9.444 7.036 14.866 17.794 14.866 29.52 0 11.726-5.422 22.484-14.866 29.52a6.145 6.145 0 00-1.616 1.786 6.21 6.21 0 00-.694 4.693 6.21 6.21 0 001.028 2.186 6.151 6.151 0 006.457 2.319 6.154 6.154 0 002.177-1.035 50.083 50.083 0 007.947-7.39h17.493c3.406 0 6.174-2.772 6.174-6.194s-2.762-6.194-6.174-6.194h-9.655a49.165 49.165 0 004.071-19.69 49.167 49.167 0 00-4.07-19.692h9.66c3.406 0 6.173-2.771 6.173-6.194 0-3.422-2.762-6.193-6.173-6.193H82.574a50.112 50.112 0 00-7.952-7.397 6.15 6.15 0 00-4.578-1.153 6.189 6.189 0 00-4.055 2.438h-.006z"/><path fill="#fff" fill-rule="evenodd" d="M56.236 79.391a9.342 9.342 0 01.632-3.608 9.262 9.262 0 011.967-3.077 9.143 9.143 0 012.994-2.063 9.06 9.06 0 017.103 0 9.145 9.145 0 012.995 2.063 9.262 9.262 0 011.967 3.077 9.339 9.339 0 01-2.125 10.003 9.094 9.094 0 01-6.388 2.63 9.094 9.094 0 01-6.39-2.63 9.3 9.3 0 01-2.755-6.395z" clip-rule="evenodd"/></svg>

Mantine is a React components library focused on providing great user and developer experience. Mantine development was started in January 2021 and the 1.0 version was released on May 3rd, 2021, and since then, more than 200 releases have been published.

## Apollo <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="26.69 28.9 1173.9 1144.1" width="20"><path d="m599.49 29.7c-2.2.1-10.5.8-18.5 1.4-100 7.4-201.4 44.4-284.5 103.8-27.5 19.6-49.2 38-73.4 62.2-139.1 139.2-196.4 338.4-152.9 531.9 17.8 79.4 55.8 159.3 106.2 223.5 79.1 100.9 187.5 172 309.1 202.8 49.5 12.6 90.6 17.7 142.5 17.7 51.2 0 88.9-4.6 137.7-16.5 70.1-17.2 131.7-45.5 193.3-88.6 59-41.4 113.9-99.4 153.3-161.9 50.8-80.8 79.7-170 86.8-267.9 1.5-20.6.6-71.6-1.6-92.6-4.4-41.7-15.6-96.7-22.1-108.2-2.6-4.5-9.9-10.3-15.3-12.2-1.9-.6-6.1-1.1-9.5-1.1-15 0-27.6 12.5-27.6 27.2 0 3.5 1.6 11.9 3.9 21 19.8 77 21.4 161.6 4.5 238.8-21.6 98.9-69.8 186.1-142.5 257.6-33.9 33.3-66.6 57.9-108.9 82.1-98.7 56.5-221.4 77.9-336.5 58.7-87.4-14.5-163.3-48.1-235.4-104.2-33.9-26.4-75.2-69.9-100.8-106.3-44.2-62.8-72-129-86.4-205.9-7.3-39.2-9.8-91.2-6.4-133.5 5.2-64.2 21.3-123.8 48.6-180.3 12.6-26.3 20.4-40 35.5-62.7 30.8-46.6 71.6-90.2 116.7-124.8 52.9-40.7 115.7-71.6 179.2-88.2 34.3-9 61.7-13.5 96.5-16 125.9-9 248.3 27.2 348 103.1 7.4 5.6 15.2 11.7 17.3 13.6l3.8 3.3-1.5 4.2c-7.7 21.6-2 48.5 14.2 67.3 8.3 9.6 23.3 18.6 36 21.6 8.7 2.1 23.8 2.1 32.6 0 22.3-5.3 43.1-24.4 49.7-45.6 7.4-23.7 3.1-47.1-12.1-66.1-16.8-21-45.7-30.4-72.4-23.4l-5.8 1.5-8.2-6.8c-33.3-27.9-73.6-53.7-116-74.2-68.8-33.3-137.9-51.2-216.6-56-15.1-.9-50.8-1.1-60.5-.3z"/><path d="m540.29 358.7c-10.6 27.4-33.6 87.4-51.3 133.3s-54 140.2-80.7 209.5c-26.6 69.3-48.7 126.3-48.9 126.7-.3.5 27.8.8 62.3.8h62.9l3.7-10.3c2.1-5.6 9.5-25.4 16.4-44l12.6-33.7h94.4c75.2 0 94.4-.3 94.1-1.3-1-2.7-16.4-46.7-24.6-70.2l-8.8-25-62.5-.5-62.4-.5 40.6-111.9c24.4-67.2 40.9-111.2 41.2-110.2.4.9 16.6 47 36.1 102.4s51.7 146.6 71.5 202.7l35.9 102 62.6.3c34.4.1 62.6 0 62.6-.2s-8.1-21.5-18.1-47.2c-10-25.8-31.4-81.3-47.6-123.4s-34.4-89.3-40.5-105c-6-15.7-16.5-42.9-23.3-60.5s-24.5-63.7-39.5-102.5-28.1-72.9-29.2-75.8l-1.9-5.2h-138.5z"/></svg>

Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating your UI.

</details>

**Hosted project:**
