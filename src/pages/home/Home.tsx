/* eslint-disable array-callback-return */
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import axios from 'axios'
import { useState, useEffect } from "react";

const Home = ({ type }: any) => {
  const [lists, setLists ] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const randomList = async () => {
      try{
        const response = await axios.get(`https://my-nextflix-clone-app.herokuapp.com/api/v1/lists/random/${type ? "?type=" + type : ''}&${genre ? "genre" + type : ''}`, {
          headers: {
            token: 
            `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmMxNTk3ZTFlNDJmMTcyZWZhZWQ2MyIsImlhdCI6MTY0MzkxMDU4MSwiZXhwIjoxNjQ0MTY5NzgxfQ.DNnF8zeo4vYSt7A-zxuSpS6qk4GmMWMxny-BsZR5PG4`
          } 
        })
        console.log(response)
        setLists(response.data)
      }catch(error:any) {
        console.log(error)
      }
    }
    randomList()
  }, [type, genre])

  return (
    <div className="home">
      <Navbar />
      <Featured type={type}/>
      
      {lists.map((list: any) => {
        <List list={list} />
      })}
      {/* <List /> */}
    </div>
  );
};

export default Home;
