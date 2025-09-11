import Auth from '../components/screens/auth/Auth'
import Home from '../components/screens/home/Home'
import NewWorkout from '../components/screens/new-workout/NewWorkout'
import Profile from '../components/screens/profile/Profile'

export const routes = [
	{
		path: '/',
		component: Home,
		auth: false
	},
	{
		path: '/auth',
		component: Auth,
		auth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		auth: true
	},
	{
		path: '/profile',
		exact: false,
		component: Profile,
		auth: true
	} /*
    {
        path: '/new-exercise',
        exact: false,
        component: NewExercise,
        auth: true,
    },
    {
        path: '/workout/:id',
        exact: false,
        component: SingleWorkout,
        auth: true,
    },
    {
        path:'/workouts',
        exact: false,
        component: ListWorkouts,
        auth: true,
    },
    {
        path: '/exercise',
        exact: false,
        component: SingleExercise,
        auth:true,
    },
    */
]
