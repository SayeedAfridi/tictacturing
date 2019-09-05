import React from 'react'
import styled from 'styled-components'
import {media} from '../utils/media'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 80%;
    height: 80vh;
    ${media.handheld`
        width: 100%;
    `}
`
export const Main = props => {
    return(
        <Container>
            {props.children}
        </Container>
    )
}
