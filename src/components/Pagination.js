import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../css/variables';

const Root = styled.div`
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;

    @media (min-width: 700px) {
        top: 2.5rem;
        right: 2.5rem;
    }
`;

const Anchor = styled(Link)`
    color: ${colors.text};
    display: inline-block;
    padding: 0.25rem 0.5rem;

    &:hover {
        color: ${colors.text};
    }
`;

const BackToOverview = styled(Anchor)`
    @media (max-width: 699px) {
        display: none;
    }
`;

function Pagination(props) {
    return (
        <Root>
            {props.previous && <Anchor to={props.previous}>{`◀`}</Anchor>}
            <BackToOverview to="/">{`●`}</BackToOverview>
            {props.next && <Anchor to={props.next}>{`▶`}</Anchor>}
        </Root>
    );
}

export default Pagination;
