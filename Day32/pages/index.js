import Head from 'next/head'
import db from '../firebase'
export default function Home () {
  const add = () => {
  db.collection("users")
  .add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    })
  };
  const get =() =>{
    db.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().first}` ${doc.data.last()});
      });
  });
  
  }
  return (
    <div className="container">
      <button onClick={() => add()}>Add</button>
    </div>
  )
}