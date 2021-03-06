# [Udemy] The Complete React Web App Developer Course [2016, ENG]


<br/>

I'm working on Ubuntu 14.04 in docker container with debian jessie:

    $ lsb_release -a
    Distributor ID:	Ubuntu
    Description:	Ubuntu 14.04.5 LTS
    Release:	14.04
    Codename:	trusty


<br/>

    $ docker -v
    Docker version 1.12.3, build 6b644ec



<br/>

<ul>
    <li><a href="http://sysadm.info/linux/containers/docker/installation/ubuntu/">How to install docker on Ubuntu 12 / 14 / 16</a></li>
    <li><a href="http://jsdev.org/env/docker/run-container/linux/">How to run docker container to start development</a></li>
</ul>


<br/>


    # node -v
    v7.3.0

<br/>

    # npm -v
    3.10.10

<hr/>

<br/>

### 03 Hello React

**01 Creating Your Web Server**

    # mkdir 03_Hello_React
    # cd 03_Hello_React/

    # npm init
    # npm install -g nodemon
    # npm install --save express@4

    # nodemon server.js

http://localhost:3000/


**02 Hello React**

**03 Atom Editor Plugins Optional**

    atom-beautify
    react

**04 Your First React Component**

**05 Learning JSX**

**06 Component Properties**

**07 User Events Callbacks**

**08 Component State**

<br/>

![08 Component State](img/03_Hello_React/08_Component_State.png)

**09 Nested Components Part 1**

**10 Nested Components Part 2**

**11 Aside Props State**

**12 Section Challenge**

![12 Section Challenge](img/03_Hello_React/12_Section_Challenge.png)

<br/>

### 04 A Better React Project

**01 What is Webpack And Installing It**

    # npm install -g webpack@1.12.13
    # npm install --save react@0.14.7
    # npm install --save react-dom@0.14.7

    # npm install --save-dev webpack@1.12.13
    # npm install --save-dev babel-core@6.5.1
    # npm install --save-dev babel-loader@6.2.2
    # npm install --save-dev babel-preset-es2015@6.5.0
    # npm install --save-dev babel-preset-react@6.5.0

**02 Generating Our Bundle**

    # webpack ./public/app.js ./public/bundle.js

http://localhost:3000/

**03 The Webpack Config File**

    # webpack

**04 Adding Babel JSX Support**

    # webpack

**05 Refactoring Your Components**

    # webpack

**06 Webpack Custom Package Names**

    # webpack

**07 Boilerplate Project**

    # cd ../ReactBoilerplate/
    # webpack
    # nodemon server.js

http://localhost:3000/


**08 Bonus Using Experimental JavaScript Features**

not interest

<br/>

### 05 Routing Our Weather App

**01 Front-end Routing**

**02 Adding React-Router**

    # cd 05_Routing_Our_Weather_App
    # npm install
    # npm install --save react-router@2.0.0

    # webpack
    # nodemon server.js

![02 Adding React-Router](img/05_Routing_Our_Weather_App/02_Adding_React_Router.png)


**03 Creating Our Pages**

![03 Creating Our Pages](img/05_Routing_Our_Weather_App/03_Creating_Our_Pages.png)

**04 Why use Link**

![04 Why use Link](img/05_Routing_Our_Weather_App/04_Why_use_Link.png)


**05 Creating WeatherForm WeatherMessage**

![05 Creating WeatherForm WeatherMessage](img/05_Routing_Our_Weather_App/05_Creating_WeatherForm_WeatherMessage.png)

**06 Exploring OpenWeatherMap.org**

**07 ES6 Promises**

**08 Faking Our Call**

**09 Making Our API Call**

    # npm install --save axios@0.9.1

![09 Making Our API Call](img/05_Routing_Our_Weather_App/09_Making_Our_API_Call.png)

**10 Adding Loading Text**

**11 Debugging The React Developer Tools**

chrome.google.com/webstore

- React Developer Tools

Browser Console: $r

**12 Advanced Debugging**

devtool: 'cheap-module-eval-source-map'

**13 ES6 Aside Arrow Functions**

**14 Refactoring Stateless Functional Components**

<br/>

### 06 Deploying Your App To Production

(Not Interesting for me)

<br/>

### 07 Styling Your App With Foundation

**01 Intro Foundation**

**02 Installing Foundation**

    # cd 07_Styling_Your_App_With_Foundation/
    # npm install
    # npm install --save css-loader@0.23.1
    # npm install --save script-loader@0.6.1
    # npm install --save style-loader@0.13.0
    # npm install --save jquery@2.2.1
    # npm install --save foundation-sites@6.2.0

<br/>

    # webpack
    # nodemon server.js

<br/>


![02 Installing Foundation](img/07_Styling_Your_App_With_Foundation/02 Installing Foundation.png)


**03 Styling Navigation**


![03 Styling Navigation](img/07_Styling_Your_App_With_Foundation/03_Styling_Navigation.png)


**04 Styling Examples Page**

![04 Styling Examples Page](img/07_Styling_Your_App_With_Foundation/04_Styling_Examples_Page.png)

**05 Styling About Page**

**06 Styling Weather Page**

![06 Styling Weather Page](img/07_Styling_Your_App_With_Foundation/06_Styling_Weather_Page.png)


**07 Adding A Modal For Errors Part 1**

![07 Adding A Modal For Errors Part 1](img/07_Styling_Your_App_With_Foundation/07_Adding_A_Modal_For_Errors_Part_1.png)


**08 Adding A Modal For Errors Part 2**


![08 Adding A Modal For Errors Part 2](img/07_Styling_Your_App_With_Foundation/08_Adding_A_Modal_For_Errors_Part_2.png)

**09 Adding Custom CSS**

**10 Setting Up SCSS**

    # npm install --save-dev sass-loader@3.2.3
    # npm install --save-dev node-sass@3.13.1

**11 Linking To Location Wiring Up Nav Form**

**12 Fixing The Error Modal**

**13 Updating Our Boilerplate**

We made new Boilerplate - "00_ReactBoilerplate_2"

<br/>

### 08 Testing Component Lifecycle

**01 Project Overview**

**02 Component Breakdown**

**03 Adding The Navigation Bar**

    # cp -R 00_ReactBoilerplate_2 08_Testing_Component_Lifecycle
    # cd 08_Testing_Component_Lifecycle
    # npm install
    # webpack -w
    # nodemon server.js

<br/>

![03 Adding The Navigation Bar](img/08_Testing_Component_Lifecycle/03_Adding_The_Navigation_Bar.png)


<br/><br/>

___


<br/>


**Marley**

<a href="https://jsdev.org">jsdev.org</a>

Any questions on eng: https://jsdev.org/chat/  
Любые вопросы на русском: https://jsdev.ru/chat/
