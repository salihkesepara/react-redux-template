const USER_SELECTED = 'USER_ADD'
const thumb = 'http://getuikit.com/docs/images/placeholder_200x100.svg'
const initialState = [
    {
        id: 1,
        first: ''
    }
]

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case USER_SELECTED:
            return [
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    first: action.user.first,
                },
                ...state
            ]
        default:
            return state
    }
}