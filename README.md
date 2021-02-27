# Project Developed during Next Level Week # 04

![Elton](https://img.shields.io/david/dev/eltoncampos1/NPS-api)

<!-- TABLE OF CONTENTS -->
<details open="open">
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
        <li><a href="#prerequisites">Pre-requisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The project is an application (The NPS® or Net Promoter Score is a metric developed to measure customer loyalty levels, created in 2003 by Bain & Company consultant, Fred Reichheld, in collaboration with Satmetrix).

## Functional Rules

- User must register using name and email;
- The user cannot register with an already registered email;
- The user must be able to create surveys;
- The user must be able to list all surveys;

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [Typescript](https://www.typescriptlang.org)
- [NodeJS](https://nodejs.org/en/)

### Used to test the application

- [Insomnia](https://insomnia.rest)
- [Beekeeper](https://www.beekeeperstudio.io)
- [ethereal](https://ethereal.email)

### Dependencies

```json
  "dependencies": {
    "@types/nodemailer": "^6.4.0",
    "express": "^4.17.1",
    "express-async-errors": "^3.1.1",
    "handlebars": "^4.7.7",
    "nodemailer": "^6.5.0",
    "reflect-metadata": "^0.1.13",
    "sqlite3": "^5.0.2",
    "typeorm": "^0.2.31",
    "uuid": "^8.3.2",
    "yup": "^0.32.9"
  }
```

### DevDependencies

```json
  "devDependencies": {
    "@types/express": "^4.17.11",
    "@types/jest": "^26.0.20",
    "@types/supertest": "^2.0.10",
    "@types/uuid": "^8.3.0",
    "jest": "^26.6.3",
    "supertest": "^6.1.3",
    "ts-jest": "^26.5.2",
    "ts-node-dev": "^1.1.6",
    "typescript": "^4.2.2"
  }
```

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- [npm](https://www.npmjs.com)

```sh
npm install npm@latest -g
```

- [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

```sh
npm install -g yarn
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/eltoncampos1/NPS-api.git
   ```
2. Install NPM packages
   ```sh
   npm install or Yarn
   ```

<!-- USAGE EXAMPLES -->

## Usage

START SERVER

```sh
    npm or yarn dev
```

RUN MIGRATIONS

```sh
    npm or yarn typeorm migrations:run
```

TESTS

```sh
    npm or yarn test
```

### Create an user endpoint

URL: [POST] http://localhost:3333/users

BODY:

```json
{
  "name": "userName",
  "email": "name@email.com"
}
```

### Create an survey

URL: [POST] http://localhost:3333/surveys

BODY:

```json
{
  "title": "You are important to us!",
  "description": "From 0 to 10, How do you feel today?"
}
```

### List all surveys

URL: [GET] http://localhost:3333/surveys

PREVIEW:

```json
{
  "id": "survey_id",
  "title": "Title_suvey",
  "description": "description_survey",
  "created_at": "date_of_creation"
}
```

### Send email with a survey

URL [POST] - http://localhost:3333/sendMail

BODY:

```json
{
  "email": "name@email.com",
  "survey_id": "survey_id"
}
```

### NPS rate

URL [GET] - http://localhost:3333/nps/:survey_id

PREVIEW

```json
{
  "detractors": 0,
  "Promoters": 0,
  "passives": 0,
  "totalAnsers": 0,
  "nps": 00
}
```

### Email template

![image](https://user-images.githubusercontent.com/56568406/109402259-2c645d00-7933-11eb-9167-cb9863abb2d8.png)

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/eltoncampos1/NPS-api/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch
   ```sh
   git checkout -b feature/AmazingFeature
   ```
3. Commit your Changes
   ```sh
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the Branch
   ```sh
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

LinkedIn - [Elton Campos](https://www.linkedin.com/in/elton-campos-074015164/)

Email - [Elton Campos](eltoncampos36@gmail.com) - eltoncampos36@gmail.com

Github - [eltoncampos1](https://github.com/eltoncampos1)

Project Link: [https://github.com/eltoncampos1/NPS-api](https://github.com/eltoncampos1/NPS-api)
