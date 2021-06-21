import React, { FunctionComponent, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { AppStateType } from '../../Redux/reduxStore'
import { me } from '../../Redux/User/userReducer'
import Preloader from '../Common/Preloader/Preloader'


interface ProtectedRouteProps {
    component: FunctionComponent
    isAuth: boolean
    path: string
    isFetching: boolean
    me: () => void
}

const ProtectedRoute = ({ component, isAuth, isFetching, me, ...rest }: ProtectedRouteProps) => {
    
    useEffect(() => {
        if(!isAuth){
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
            <Route { ...rest} render={routeComponent}/>
        </>
    )
}

let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.user.isAuth,
    isFetching: state.common.isFetching
})

export default connect(mapStateToProps, {
    me
})(ProtectedRoute)