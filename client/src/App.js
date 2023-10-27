import "./App.css";
import axios from "axios";
//引入useEffect和useState钩子函数管理状态和副作用
import { useEffect, useState } from "react";

function App() {
  const [listAllPost, setlistAllPost] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setlistAllPost(response.data);
    });
  }, []);
  //使用map映射取值
  return (
    <div className="App">
      {listAllPost.map((value, key) => {
        return (
        <div className="container">
            <div class="card mx-auto" style={{width:'500px'}}>
                <div class="card-body">
                    <h5 class="card-title">{value.title}</h5>
                    <p class="card-text">{value.postText}</p>
                    <h6 class="username">{value.username}</h6>
                </div>
            </div>
        </div>
        );
      })}
    </div>
  );
}

export default App;
