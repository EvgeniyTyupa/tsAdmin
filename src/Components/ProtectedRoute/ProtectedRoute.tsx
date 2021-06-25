import React, { FunctionComponent, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { AppStateType } from '../../Redux/reduxStore'
import { me } from '../../Redux/User/userReducer'
import { User } from '../../Redux/User/userTypes'
import Preloader from '../Common/Preloader/Preloader'


interface ProtectedRouteProps {
    component: FunctionComponent
    isAuth: boolean
    path: string
    exact: boolean
    isFetching: boolean
    user: User | null
    me: () => void
}

const ProtectedRoute = ({ component, isAuth, isFetching, user, exact, me, ...rest }: ProtectedRouteProps) => {
    
    useEffect(() => {
        if(!isAuth || !user){
            me()
        }
    }, [])

    const routeComponent = (props: any) => (
        isAuth 
            ? React.createElement(component, props)
            : <Redirect to={{ pathname: '/auth/login' }}/>
    )
    
    return(
        <>
            {isFetching && <Preloader/>}
            <Route {...rest} render={routeComponent}/>
        </>
    )
}

let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.user.isAuth,
    isFetching: state.common.isFetching,
    user: state.user.user
})

export default connect(mapStateToProps, {
    me
})(ProtectedRoute)