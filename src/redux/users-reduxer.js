const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initalStat = {
    users: [
        {fullname: 'Diman', id: 1, photo: 'https://s11.stc.all.kpcdn.net/share/i/12/10723905/inx960x640.jpg', followed: false, status: 'im live it', location: {city: 'Moskow', country: 'Russia'}},
        {fullname: 'Alex', id: 2, photo: 'https://s11.stc.all.kpcdn.net/share/i/12/10723905/inx960x640.jpg',followed: true, status: 'im live ', location: {city: 'London', country: 'England'}},
        {fullname: 'Mila', id: 3, photo: 'https://s11.stc.all.kpcdn.net/share/i/12/10723905/inx960x640.jpg',followed: false, status: 'im', location: {city: 'Berlin', country: 'Germany'}},
        {fullname: 'Nika', id: 4, photo: 'https://s11.stc.all.kpcdn.net/share/i/12/10723905/inx960x640.jpg',followed: true, status: 'im prostitut', location: {city: 'tel-Avi', country: 'Israel'}},
    ]
};

const usersReduxer = (state = initalStat, action) => {

    switch (action.type) {
        case FOLLOW:
return {...state,
    //users: [...state.users],
    users: state.users.map (u => {
        if (u.id === action.userId){
            return {...u, followed: true}
        }
        return u;
    })

             }
        case UNFOLLOW:
            return {...state,
                //users: [...state.users],
                users: state.users.map (u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })

            }
        case SET_USERS :
return {...state, users: [...state.users, ...action.users]}

            default:
            return state;
    }
}
export const followAc = (userId) => {
    return {type: FOLLOW,
             userId}
};
export const unfollowAc = (userId) => {
    return {type: UNFOLLOW,
             userId}
};

export const setUsersAc = (users) => {
    return {type: SET_USERS,
        users}
};

export default usersReduxer;