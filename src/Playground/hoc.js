import React from 'react'
import ReactDOM from 'react-dom'



const Info = (props) => (
    <div>
        <h1> Info </h1>
        <p>The info is: {props.info} </p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <dev>
            {props.isAuthorize ? <p>You have access to this page</p> :<p>You dont have access to this page</p>}
            <WrappedComponent {...props} />
        </dev>
    )
}





const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app-root'))
ReactDOM.render(<AuthInfo isAuthorize={true} info="There are the details" />, document.getElementById('app-root'))