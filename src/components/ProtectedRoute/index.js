import Cookies from "js-cookie";

import {Route,withRouter, Redirect} from "react-router-dom";

const ProtectedRoute = (props) => {


    const token = Cookies.get("jwtToken");

    if(token === undefined){
        const {history} = props;
        history.replace('/login');
    }

    return (
        <Route {...props}/>
    )
    
};

export default withRouter(ProtectedRoute);