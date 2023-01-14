const URL = 'https://cheeseapp-backend.onrender.com'

export const cheesesLoader = async () => {
    const response = await fetch(URL + "/cheese")
    const people = await response.json()
    console.log(people)
    return people
  }

  export const cheeseLoader = async ({params}) => {
    const response = await fetch(URL + "/cheese/" + params.id )
    const person = await response.json()
    console.log(person)

    return person

}  