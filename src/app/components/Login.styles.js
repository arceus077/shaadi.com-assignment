import styled from 'styled-components';
import { TextField, withStyles } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { green, blue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 10%;
`;

const LoginContainer = styled.div`
    text-align: center;
    top: 50%;
    left: 50%;
    padding: 20px;
    min-width: 200px;
    max-width: 400px;
    background-color: #fff;
    border: 3px solid #AAAAAA;
    border-radius: 8px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
    }
`;

const theme = createMuiTheme({
    palette: {
      primary: green,
    },
});

const UserNameInput = withStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: '200px',
        maxWidth: '266px',
        margin: 'auto',
        marginBottom: '30px',
    },
})(TextField);

const LogInButton = withStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: '200px',
        margin: 'auto',
        marginTop: '30px',
        marginBottom: '10px',
        backgroundColor: '#AAAAAA',
        color: '#FFF',
        '&:hover': {
            backgroundColor: '#72afd3',
        },
        '&:focus': {
            backgroundColor: '#72afd3',
        }
    },
})(Button);

export {
    LoginContainer,
    UserNameInput,
    theme,
    LogInButton,
    Container,
}