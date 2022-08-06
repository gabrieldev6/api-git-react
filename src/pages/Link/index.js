import {Link as LinkRoute} from 'react-router-dom'

export default function Link(linkProps) {
    
    console.log(linkProps.redirect)
    return (
        <LinkRoute className='links-menu' to={linkProps.redirect}>
            {linkProps.children}
        </LinkRoute>
    )
}