import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  let [list, setList] = useState([])

  useEffect(() => {
    (async () => {
      const res = await axios.get('http://server.jsliushen.com/demo/users/list')
      if (res && res.data && res.data.code === 200 && Array.isArray(res.data.data)) {
        setList(res.data.data)
      }
    })()
  }, [])

  return (
    <ul>
      {
        list.map(item => (
          <li key={item.id}>{item.userName}-{item.age}</li>
        ))
      }
    </ul>
  )
}

export default App;
