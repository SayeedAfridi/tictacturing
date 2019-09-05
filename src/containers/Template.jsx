import React, {Component} from 'react'

import NavDrawer from '../components/Navdrawer'

import {Main} from '../styled/TemplateStyle'



class Template extends Component {

    render() {
        return(
                <div>
                    <NavDrawer />
                    <Main>
                        {this.props.children}
                    </Main>
                </div>
        )
    }
}

export default Template;