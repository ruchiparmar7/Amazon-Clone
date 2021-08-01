# Amazon Clone 1.0
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## Screenshot
<img src = "Images/ss 1.png">
<img src = "Images/ss 2.jpg">
<img src = "Images/ss 3.jpg">
<img src = "Images/ss 4.png">
<img src = "Images/ss 5.png">


### How to run project:

- First Download the code
- Make Sure you have install Node.js
- Open "Amazon-Clone" **Folder** in any code editor(eg VS)
- Now Run Command(Amazon folder): npm i
- Create account in Stripe & firebase
- Copy Your firebase WebApp config and paste in **firebase.js**
  firebaseConfig = {};
- Open Stripe -> Developers -> API keys ->  copy **publishable keys** and paste in **APP.js**
  const stripePromise = loadStripe('publishable key')
- copy **secret key** of stripe and paste in **function folder/index.js**
  const stripe = require("stripe")("Secret key here"); 
- Run same command in function folder: npm i
- Now lets run project
  1. For Frontend (AMAZON folder) run command: npm start
  2. For Backened (AMAZON/function folder) follow link: [Link](https://blog.usejournal.com/build-a-serverless-full-stack-app-using-firebase-cloud-functions-81afe34a64fc)  
- To Deploy a App with Firebase Hosting: [Link](https://medium.com/swlh/how-to-deploy-a-react-app-with-firebase-hosting-98063c5bf425)


## Packages Used:

1. frontened 
  - npm install @material-ui/icons
  - npm install --save @stripe/react-stripe-js @stripe/stripe-js
  - npm install axios
  - npm install -g firebase-tools
  - npm install moment --save 
  - npm install react-currency-format --save

2. function
  - npm install stripe --save
  - npm install express
  - npm i cors

## Link

- Demo Video: [Link](https://drive.google.com/file/d/1LeKTuVardpcsNgH4Ku7Sx9suwtjIA-rD/view?usp=sharing)
- Website Video: [Link](https://fir-e3a3a.web.app/)

