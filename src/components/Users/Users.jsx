import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../images/img/user.png'

let Users = (props) => {

if (props.users.length === 0) {

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{

        props.setUser(response.data.items)

    });

}
    return <div>
        {
            props.users.map(u => <div key={u.id}>

                    <span>
                       <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto } className={styles.userPhoto}/>
                       </div>
                       <div>
                           {u.followed ? <button onClick={() =>{props.unfollow(u.id)}}>unfollow</button>  : <button onClick={() =>{props.follow(u.id)}}>follow</button>}
                         </div>
                    </span>
                    <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    </span>
                    <span>
                    <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                </span>
                </div>
            )
        }

    </div>
}

export default Users;
