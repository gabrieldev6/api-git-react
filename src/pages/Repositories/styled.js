import styled from 'styled-components';
import {Link } from 'react-router-dom';

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
`

export const ListItem = styled.li`
    margin: .5rem 0;
    background: #000;
    color: white;
    padding: .5rem;
    border-radius: 5px;
`

export const LinkHome = styled(Link)`
    font-family: sans-serif;
    display: block;
    color: white;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    padding: .5rem 0;
    text-decoration: none;
    border-radius: 5px;
`
