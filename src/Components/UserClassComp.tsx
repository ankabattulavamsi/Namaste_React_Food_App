import React from "react";


interface IsProps {
    name: string
    location: string
}

class UserClassComp extends React.Component<IsProps > {
    constructor(props:IsProps){
        super(props);
        console.log(props)
    }
    render() {
        const {name, location} = this.props
        return(
            <div>
                <h3>Name:{name} </h3>
                <h3>Location:{location} </h3>
            </div>
        )
    }
}

export  default UserClassComp