# SEI - Project 2 
# Cats-app
Click 👉🏽 🐈

# Table of Contents

- [Overview](#overview)
- Brief
- Technologies
- Dependencies & Components
- Approach
- Wins
- Challenges
- Future features
- Key Learnings/Takeaway
- Contribution to this Project
- License & Copyright

#  Overview
This was the first project I built using React and APIs, after studying both during the previous week. It was quite a challenging project as I did not feel confident in the understanding of either of the two, but I finally became confident in the end.

#  Brief
As a solo project, I had 8 days to develop an app using React and fetch data from a  free public API. I had to do the following:


The second project is to **build a React application** that consumes a **public API**.
​
### Technical Requirements
​
Your app must:
​
* **Consume a public API** – this could be anything but it must make sense for your project.
* **Have several components**
* **The app can have a router** - with several "pages", this is up to you and if it makes sense for your project.
* **Include wireframes** - that you designed before building the app.
* **Be deployed online** and accessible to the public (hosted on your public github, not GA github!)
​
---
​
### Necessary Deliverables
​
* A **working application**, hosted somewhere on the internet
* A **link to your hosted working app** in the URL section of your Github repo
* A **git repository hosted on Github**, with a link to your hosted project, and frequent commits dating back to the _very beginning_ of the project
* **A `readme.md` file** with:
 * Explanations of the **technologies** used
   * A couple of paragraphs about the **general approach you took**
   * **Installation instructions** for any dependencies
   * Link to your **wireframes** – sketches of major views / interfaces in your application
  * Descriptions of any **unsolved problems** or **major hurdles** your team had to overcome
​
---

#  Technologies

 JavaScript
 - Sass 
 - Bulma

#  Framework

 - React
 - Node.js

 #  Dependencies & Components
 - Axios
 - Yarn
 - GitHub

#  Approach

## Day 1:
I started by thinking of the kind of app to build. I had little or no idea of what I would build. After about a day of online searches of different APIs, I finally decided to build a cat-app based on the ‘thecatapi.com’ API.

![insomnia-project2](https://user-images.githubusercontent.com/84001897/131217982-a35452a1-287d-458f-9ff7-4a97c5ecb049.png)

## Day 2:

### Wireframe

On the second, I started with the wireframe.
I made a short plan using Figma.com as shown below.



![project 2](https://user-images.githubusercontent.com/84001897/131218622-f590b6c8-a36c-4c9c-805c-d17a9e16161b.png)

#  Process

For the rest of the other days, I continued the process. I started by setting up the `App.js page`. I then requested the data from the API and made sure I was receiving this on the console in the developer tool.

I created the `navBar page` and the cats folder. I moved the content of `App.js` to the `CatModel` file and replaced it by creating route paths for each route. 
I created the `home page`.

    useEffect(() => {
        const getData = async () => {
          try {
            const { data } = await axios.get('https://api.thecatapi.com/v1/breeds')
            setBreeds(data)
            // console.log(data)
            // console.log('response', breeds)
          } catch (err) {
            console.log(err)
          }
        }
        getData()
      }, [])
