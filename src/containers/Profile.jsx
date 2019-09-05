import React, {Component} from 'react'
import Template from './Template'

class Profile extends Component {

    render() {
        return(
            <Template>
                <header>
                    <h1>Profile</h1>
                </header>
                <main>
                    {this.props.children}
                </main>
            </Template>
        )
    }
}

export default Profile;