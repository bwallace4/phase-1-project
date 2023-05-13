# Sneaker Lab
Everyone's first project may not necessarily be an amazing one. So trying to create your own personal app can be challenging. I wanted to create an project that peeked my interest and would motivate me in the future. This was sort of a roadmap or guide for future endeavors. 

 My app accesses data from a db.json file. Then I use this data to create shoe images,that have different functionality. 





## Installation

Install my project with git clone  git@github.com:bwallace4/phase-1-project.git 

```bash
 $ npm install -g json-server
  cd my-phase-1-project
  open index.html

```
Requirements
*html
*css
*javascript
    
## Usage/Examples

```javascript
fetch("http://localhost:3000/shoe").then(response => response.json())
.then((shoe) => {
shoe.forEach(shoebox)
});

```
Gets the data from db.json file

## Roadmap

- add additional functions inside main.js

- add submit eventlistner to create a shoe

- additional element tags 


## Contributing

Contributions are always welcome!

Make sure the json server is up and running
json server --watch db.json


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- https://github.com/bwallace4

- https://github.com/kdredden