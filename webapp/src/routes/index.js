import Home from '../pages/Home'
import User from '../pages/User'
import Post from '../components/user/Post'
import Comment from '../components/user/Comment'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/user',
        component: User,
        children: [
            {
                path: '',
                component: Post
            },
            {
                path: 'post',
                component: Post
            },
            {
                path: 'comment',
                component: Comment
            }
        ]
    },
]

export default routes
