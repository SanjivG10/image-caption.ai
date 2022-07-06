import React from 'react'
import ReactGoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'


const GoogleLogin = () => {
    const onSignInSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        console.log(response)
    }

    const onSignInFailure = (error: any) => {
        console.log(error)
    }

    return (
        <ReactGoogleLogin
            className='mr-2'
            clientId="351886007976-qqg9cr66q8miqolfnmrq7kgjh3i78v60.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={onSignInSuccess}
            onFailure={onSignInFailure}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default GoogleLogin