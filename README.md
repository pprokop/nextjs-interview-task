This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn 
```

## Api key
* Create account and generate API key for Pexels API https://www.pexels.com/join-consumer/
* Add .env.local file to your root folder and inside add your Pexels key to the API_KEY variable.

## Running development server
```bash
npm run dev
# or
yarn dev
```

## Tasks

#### Add list of images
- Display images by 5 in row
- After clicking image, image should be visible in the modal. Also, author of the photo should be displayed in right bottom corner
- Modal can be closed by clicking 'X' icon, outside of photo and pressing 'Esc' key on the keyboard.

#### Searching images
- Add search field above image list
- Images should be filtered by typed text.
- Request should be fetched when user stopped typing (not for each letter ;) )
- User should be able to choose how many images is visible per page. Available values: 10, 25, 50,
- List should be paginated
 
 #### Terms and condition page
 - Add link in the footer of app 'Terms and Condition'. Link should provide to another page
 - Get content for page from http://legalipsum.com/?count=2
