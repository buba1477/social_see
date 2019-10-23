const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initalStat = {
    users: [
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