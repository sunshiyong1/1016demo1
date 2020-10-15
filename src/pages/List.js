import React from 'react'
import Details from './Details'
import { NavLink, Route } from 'react-router-dom'
function List(props) {
  console.log(props);
  const list = [
    {id:1,name:'小白'},
    {id:2,name:'小灰'},
    {id:3,name:'小黑'}
  ]
  const goDetais = () => {
    props.history.push('/list/detail' + 5)
  }
  return (
    <div>
      {list.map((item,index) => {
        return <li key="index"><NavLink to={"/list/details?id=" + item.id}>{item.id}</NavLink></li>
      })}
      <li><span onClick={goDetais}>跳转</span></li>
      <Route path="/list/details" component={Details} />
    </div>
  )
}
export default List