import React from 'react';
import { useLocation } from 'react-router-dom'
import { ArrowRight16 } from '@carbon/icons-react'

import { HeaderContainer, Header, Image, ViewResumeLink } from './styles';

const UserHeader = ({ user }) => {
    const location = useLocation();

    return (
        <HeaderContainer isHome={location.pathname === '/'}>
            <Header>
                <Image src={user.basics.picture} />
                <div>
                    <h2>{user.basics.name}</h2>
                    <h4>
                        <a
                            href={`https://gitconnected.com/${user.basics.username}`}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            @{user.basics.username}
                        </a>
                    </h4>
                    <p>{user.basics.label}</p>
                    
                    
                    <p>
                        Blog: {< a href={"Hey"} url="https://medium.com/@christianeduncan3" target="_blank" rel="noreferrer noopener">
                            Christian Duncan on Medium
                        </a>}
                        
                    </p>
                </div>
            </Header>
            <div>
                <ViewResumeLink
                    href={`https://gitconnected.com/${user.basics.username}/resume`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>View Résumé</span>
                    <ArrowRight16 />
                </ViewResumeLink>
            </div>
        </HeaderContainer>
    );
};
export default UserHeader;