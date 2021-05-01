import styled from 'styled-components';
import { withStyles } from '@material-ui/core';
import { Button, Typography, Toolbar } from '@material-ui/core';

const LogOutButton = withStyles({
    root: {
        marginLeft: 'auto',
        backgroundColor: 'red',
        color: '#FFF',
        '&:hover': {
            backgroundColor: 'maroon',
        }
    },
})(Button);

const TypographyComponent = withStyles({
    root: {
        textAlign: "center",
    },
})(Typography);

const ToolbarComponent = withStyles({
    root: {
        textAlign: "center",
    },
})(Toolbar);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 5px;
    margin-inline: auto;
    width: min-content;
    margin-top: 10px;
    background-color: #001f3f;
    border-radius: 20px;
`;

const SubContainer = styled.div`
    background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
    background-blend-mode: multiply,multiply;
    border-radius: 20px;
    `;

export {
    LogOutButton,
    TypographyComponent,
    ToolbarComponent,
    Container,
    SubContainer,
}