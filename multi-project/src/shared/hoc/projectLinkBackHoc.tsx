import { Link } from 'react-router-dom';

const projectLinkBackHoc = (Comp: React.FC, menuLink: string) => {
    return (props: any) => {
        return (
            <div>
                <Link to={menuLink}>&lt; &lt; Back to {menuLink.replace('/', '')}</Link>
                <Comp {...props}/>
            </div>
        )
    }
}

export default projectLinkBackHoc;