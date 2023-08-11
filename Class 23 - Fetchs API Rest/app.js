const API_URL = "https://www.course-api.com/react-tours-project"

// async / await

/* async function getData() {
  const response = await fetch(API_URL)

  // JSON ----> JavaScript Object Notation
  const data = await response.json()


  })
} */

const getData = async () => {
  const resp = await fetch(API_URL)
  const ourData = await resp.json()

  ourData.map((myTour) => {
    console.log(`
    
    ${myTour.name} is US$ ${myTour.price}
    
    `)
  })
}

getData()

/* 

HTTP CODES:

- Informative Responses ( 100 - 199 ) [ Informative ]
- Correct Responses ( 200 - 299) [ Success ]
- Redirections ( 300 - 399 ) [ Redirect ]
- Client Errors ( 400 - 499 )  
- Server Errors (500 - 599)

*/
