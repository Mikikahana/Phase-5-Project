# README
# Chaverim of GW
This app allows a dispatcher to view car breakdowns, all of the responders, edit the breakdowns, and add more breakdowns.

## Technologies Used

- JavaScript
- React
- Ruby
- ActiveRecord
- Tailwind Css

## Requirements
- Ruby 2.7.0
- NodeJS (v16 or higher), and npm

## Installation
Clone down the repository, install and update dependencies using npm. When you're ready to start building your project, run:

```
bundle install
rails db:create
npm install --prefix client
```
Then, you can use the following commands to run the application:

- `rails s`: which will run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: which will run the frontend on [http://localhost:4000](http://localhost:4000)

# Models
1. A dispatcher has many breakdowns and has many responders
2. A responder belongs to a dispatcher and has many breakdowns through breakdown responders
3. A breakdown belongs to a dispatcher and has many responders through breakdown responders
4. A breakdown responder belongs to both responders and breakdowns

# ERD Diagram
![Chaverim of GW ERD](https://user-images.githubusercontent.com/116747565/228399092-20f170b4-574c-40bf-ab93-cfa2c5a71e79.png)


# API Endpoints
![API Endpoints](https://user-images.githubusercontent.com/116747565/228399080-18421468-ad1b-45d5-b21b-c71be3cbea9a.png)


# REACT Component tree
![REACT Component tree](https://user-images.githubusercontent.com/116747565/228399142-2fd3160f-13ad-4a35-954d-0831849ae1ef.png)

