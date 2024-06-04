<a name="readme-top"></a>


<!-- 
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
-->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/rezzSalmani/golden-coffee">
    <img src="https://github.com/rezzSalmani/golden-coffee/blob/main/public/images/app-logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Golden Coffee</h3>

  <p align="center">
      <strong>Online Coffee Shop</strong>

    
DESCRIPTION
    <br />
    <a href="https://github.com/rezzSalmani/golden-coffee"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://goldencoffeeo.liara.run">View Demo</a>
    ·
    <a href="https://github.com/rezzSalmani/golden-coffee/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/rezzSalmani/golden-coffee/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot](https://github.com/rezzSalmani/golden-coffee/blob/master/src/assets/screenShots/Foodie.png)](https://github.com/rezzSalmani/golden-coffee)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Key Features
* **Product Browsing**

  Users can explore a wide range of fast food options, each with detailed product information, including descriptions, pricing, and availability.
* **Favorites and Cart Management**


<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

* [![React][React.js]][React-url]
* ![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)
* ![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)
* ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
* ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
* [![tailwindcss](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Technologies Used
 * React: A powerful JavaScript library for building user interfaces.
 * Redux: A predictable state container for managing the application's state.
 * Tailwind CSS: A utility-first CSS framework for rapid UI development.
 * React Router: A routing library for React, providing client-side routing and navigation.

<!-- GETTING STARTED -->
## Getting Started

To run this project locally, you will need to follow these steps:

### Prerequisites

the project uses <strong>supabase</strong> as database, so you will need to install supabase and store it's url and key in a local variable ``.env.local`` file
This is an example of how to list things you need to use the software and how to install them.


### Installation

1. Get a free API Key at [https://supabase.com](https://supabase.com)
2. Clone the repo
   ```sh
   git clone https://github.com/rezzSalmani/golden-coffee.git
   ```
3. Install NPM packages
   ```sh
    npm install
   ```
4. Enter your API in `.env.local`
   ```.env
   VITE_SUPABASE_URL = 'ENTER YOUR API';
   VITE_SUPABASE_ANON_KEY = 'ENTER YOUR API';
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

* user can see the food details with click on the food name or image
* to order a food user need to add at least one product to the cart
* after adding product user can see the final price and also fill the form to final payment.
* removing the product is accessable from check page or user cart


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Contributing

  Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please feel free to open a new issue or submit a pull      request.

<!-- CONTACT -->
## Contact

Reza Salmani - [contact me](rezasalmani.dev@gmail.com)

Project Link: [https://github.com/rezzSalmani/golden-coffee](https://github.com/rezzSalmani/golden-coffee)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/rezzSalmani/golden-coffee/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/rezzSalmani/golden-coffee/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/rezzSalmani/golden-coffee/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/rezzSalmani/golden-coffee/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/rezzSalmani/golden-coffee/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
