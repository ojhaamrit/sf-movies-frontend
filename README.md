# SF_MOVIES - SAGE 

## Description
This service provides the location of movies filmed in San Francisco with interactive maps. 
Some features of this application are: 
- List of movies and details
- Search the movie with title
- Show Movie Location on Map with Marker along with the details

Mostly this application is focus on backend with some emphasis on frontend. But this repository consists of front-end. For backend click [HERE](https://github.com/ojhaamrit/sf-movies)
   
- Frontend
   
   - react
   - react-leaflet(OpenStreetMap)

---

- This OpenStreetMap's geo-coding API uses this application, which doesn't accurately converts 
address into latitude and longitude due to which map does not show location of most of the 
movie in San Francisco while importing the data from the [DataSF: FileLocation](https://data.sfgov.org/resource/yitu-d5am.json).
The best alternative for  OpenStreetMap's geo-coding API is Google Map's geo-coding API, which I could not afford at the moment.

- Due to the time constraint, I could not add security to the system. 

## Application Link
This application has been deployed in Heroku. Links to this application is:

- [Application Deployed URL](https://sf-movies-frontend.herokuapp.com/)

## Link to Personal Profile

- [GITHUB: ojhaamrit](https://github.com/ojhaamrit)

---
