import React from "react";
import reactDom from "react-dom";

const user = {
  nombre: 'edisson',
  apellio: 'osorio',
  avatar: 'https://p4.wallpaperbetter.com/wallpaper/277/725/219/kimetsu-no-yaiba-giyu-tomioka-kimetsu-no-yaiba-blue-eyes-hd-wallpaper-preview.jpg'
}
function getName(user){
  return `${user.nombre} ${user.apellio}`
}
function getGreeiting(user){
  if(user){
    return <h1>hello {getName(user)}</h1>
  }
  return <h1>s</h1>
}

const name = 'edisson'
const element = (
      <div>
        <h1>{getGreeiting(user)}</h1>
        <img src={user.avatar}/>
      </div>
)


const container = document.getElementById('root')
reactDom.render(element, container)