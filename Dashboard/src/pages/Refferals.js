import  pic_1 from '../assets/1.png';
import  pic_2 from '../assets/2.png'
import  pic_3 from '../assets/3.png'
import  pic_4 from '../assets/4.png'

function Refferals() {
    const refferalData = [
        {
            id: 0,
            image: pic_1,
            altImage: "image1",
            title: "Francesca Metts",
            followers: "21.k"
        },
        {
            id: 1,
            image: pic_2,
            altImage: "image2",
            title: "Malcolm Quaday",
            followers: "7.16.k"
        },
        {
            id: 2,
            image: pic_3,
            altImage: "image3",
            title: "Lindsey Rivard",
            followers: "14.5.k"
        },
        {
            id: 3,
            image: pic_4,
            altImage: "image4",
            title: "Lindsey Rivard",
            followers: "12.4k"
        },
        {
        id: 4,
            image: pic_1,
            altImage: "image1",
            title: "Francesca Metts",
            followers: "21.k"
        },
        {
            id: 5,
            image: pic_2,
            altImage: "image2",
            title: "Malcolm Quaday",
            followers: "7.16.k"
        },
        {
            id: 6,
            image: pic_3,
            altImage: "image3",
            title: "Lindsey Rivard",
            followers: "14.5.k"
        },
    ]    
    return (  
        <table>
            {refferalData.map((person)=>
            <tr>
            <td><img src={person.image} alt={person.altImage}></img></td>
            <td className="content1">{person.title}<span className="likes">{person.followers}</span></td>
          </tr>
            )
            }
      </table>     
    )
  }
export default Refferals