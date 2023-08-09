import React,{useEffect,useState} from 'react'
import {connect}  from 'react-redux'
import { fetchUsers ,createUser,updateUsers,deleteUser} from '../redux'

function UserContainer({userData,fetchUsers,createUser,updateUsers,deleteUser}) {
    const[formData,setFormData]=useState({
// name:'',
// username:'',
// email:''
id: null,
name: '',
username: '',
email: ''

    })

    const {id,name,username,email}=formData;
    const onChange=e => setFormData({...formData,[e.target.name]: e.target.value})

    // const onSubmit=e =>{
    //     e.preventDefault()
    //     console.log(formData)
    //     createUser(formData)
    // }
const onSubmit=(e)=>{
    e.preventDefault();
    if(id){
       updateUsers(formData)
       setFormData({
        id:null,
        name:'',
        username:'',
        email:''
       }) 
    }else{
        createUser(formData);
        setFormData({
            name:'',
            username:'',
            email:''
        })
    }
}

const handleEdit=(user)=>{
    setFormData({
        id:user.id,
        name:user.name,
        username:user.username,
        email:user.email
    })
}

const handleDelete=(userId)=>{
    deleteUser(userId)
}
useEffect(()=>{
    fetchUsers()
},[])
  return userData.loading ? (
    <h2>Loading.....</h2>

  ):userData.error ? (
    <h2>{userData.error}</h2>
  ):(
    <div>
        <h2>user List</h2>
<ul>
       {userData && 
       userData.users 
       && userData.users.map(user => <li key={user.id}><p>{user.name}</p> 
       <button onClick={()=> handleEdit(user)}>Edit</button>
       <button onClick={()=> handleDelete(user.id)}>Delete</button></li>) }
     </ul>  
     <form onSubmit={onSubmit}>
     <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} />
              <input type="text" placeholder="Username" name="username" value={username} onChange={onChange} />
              <input type="email" placeholder="Email" name="email" value={email} onChange={onChange} />
              <button type="submit">{id ? 'Update User' : 'Create User'}</button>

     </form>
     
     
      </div>
  )

}
const mapStateToProps=state=>{
    return{
        userData:state.user
    }
}
const mapDispatchToProps=dispatch =>{
    return{
        fetchUsers:()=>dispatch(fetchUsers()),
        createUser:(userData)=> dispatch(createUser(userData)),
        updateUsers: (userData) => dispatch(updateUsers(userData)),
        deleteUser: (userId) => dispatch(deleteUser(userId))


    }
}


export default connect(mapStateToProps,mapDispatchToProps) (UserContainer)
