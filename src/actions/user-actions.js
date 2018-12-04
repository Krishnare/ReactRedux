export const UPDATE_USER = "users:userReducer";

export function updateUser(newUser){
    return{
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
};
