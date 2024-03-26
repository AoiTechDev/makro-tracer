# MealFulness
(Under development)

https://mealfulness.vercel.app/

Test account credentials:

- login: test@gmail.com
- password: test1234

(Settings on this account have been disabled to prevent changing credentials. Dashboard functionality fully works.)

## Motivation - Why am I creating this app?
I became interested in understanding my daily nutritional intake when I returned to the gym. I wanted to monitor my meals to gauge the amount of protein and calories I was consuming. Additionally, some of my family members and friends expressed interest in using an app like this, but they couldn't find a free and satisfactory option. This motivated me to develop my own app that would cater to our specific requirements.

## Project Overview
Dynamic meal tracking platform seamlessly integrated with nutrition data from external APIs. Enhanced with AI capabilities for personalized meal guidance, the platform facilitates effortless monitoring of weekly nutrition charts. Designed with streamlined efficiency in mind, it offers intuitive tools for effective meal management.


<h2 align="left">Features</h2>

- **Meal Tracking**: Easily create meals with customized nutrition profiles and seamlessly add them to your calendar for convenient tracking.

- **Ingredient-based Search**: Effortlessly discover detailed nutrition information for any meal by inputting the grams of its ingredients, empowering you to make informed dietary choices.

- **Weekly Nutrition Stats**: Visualize your weekly consumption of selected nutrients through an intuitive line chart, providing valuable insights into your dietary habits and goals.

![image](https://github.com/AoiTechDev/mealfulness/assets/88384089/b9c51ec8-653d-4c5c-ba82-8f92959c9088)


- **AI-Powered Assistant**: Access an intelligent AI chat overlay that offers comprehensive assistance on meal planning, nutrition inquiries, and recipe recommendations, enhancing your overall user experience with valuable insights and guidance.

![image](https://github.com/AoiTechDev/mealfulness/assets/88384089/e8546055-d8f5-4b38-98e6-4ab7f675daba)

## Settings Panel

Users can change few things here due to their account like: 

- Their names.
- Email,
- Password.
- Avatar. 

Feature with avatar was bit tricky and fun to do and also really teaching. I used AWS S3 Bucket to keep all images which user upload. I generate url for the image which is stored in S3 and I keep it in db. For optimizing all of this, I rezise image down to improve performance and avoid uploading large resolution images just for avatar picture.

![image](https://github.com/AoiTechDev/mealfulness/assets/88384089/9a3ee597-579c-444c-9195-13cd0ec337a4)

  
## How to use? - IMPORTANT
To utilize the platform, registration is required. No need for concern; you can input any email and password without requiring email confirmation. Additionally, passwords are encrypted in the database.
After registration, you will be redirected to the dashboard containing all content. However, without proper authorization, you won't be able to access the functionality.

- To search for ingredients you need to provide amout of that ingredient and its name, for example: 200g chicken
- To search for multiple ingredients you follow the same rule, for example: 200g chicken 100g rice 150g vegetables

<h2 align="left">Technologies</h2>

- `Typescript`
- `Next.js`
- `TailwindCSS`
- `PostgreSQL`
- `Shadcn`
- `Zod`
- `Next-Auth`
- `Zustand`
- `React Query`
- `React Hook Form`
- `Redis`
- `Jest`
- `React Testing Library`
- `AWS S3`


<h2 align="left">Other functionalities</h2>

- User Authentication.
- Session Management.
- Page Protection.
- Implemented Paraller Routing to make Dashboard.
- Used Suspense for each Paraller Route to improve user experience by avoiding long page load.
- Created message rate limit with Redis to prevent spams to OpenAI API.
- Hasing passowrds before inserting it to DB.
- Stream AI responses to the user to enchance UX.



