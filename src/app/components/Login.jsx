import { withRouter } from 'react-router-dom';
import React from 'react';
import {
    ThemeProvider,
  } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { LoginContainer, UserNameInput, LogInButton,
    theme, Container } from './Login.styles';
import config from '../../config';
import Loader from './Loader';


class Login extends React.Component {
    constructor(props) {
        super();
        const isAuthorised = localStorage.getItem("isAuthorised");
        this.state = {
            username: '',
            password: '',
            showPassword: false,
            loader: false,
            isAuthorised,
        }
    }

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value });
    };

    handlePasswordChange = (event) => {
       this.setState({ password: event.target.value });
    };
    
    handleClickShowPassword = () => {
       this.setState({ showPassword: !this.state.showPassword });
    };

    handleMouseDownPassword = (event) => {
       event.preventDefault();
    };

    login = (event) => {
        this.setState({ loader: true }); // Dummy Loader functionality for 1 second
        const { username, password } = this.state;
        const checkUsername = config.username.toLocaleLowerCase();
        const checkPassword = config.password;
        if (username.toLocaleLowerCase() === checkUsername && password === checkPassword){
            localStorage.setItem("isAuthorised", true);
            setTimeout(() => {
                this.setState({ loader: false });
                this.props.history.push('home');
            }, 1000);
        } else if (username === '' || password === '') {
            window.alert('Username or Password is empty!');
            this.setState({ loader: false });
        } else {
            window.alert('Wrong credentials');
            this.setState({ loader: false });
        }
    }

    render() {
        const { loader, isAuthorised, password, showPassword } = this.state;

        if (isAuthorised === 'true') {
            this.props.history.push('home');
        }

        if (loader) {
            return (
                <div>
                    <Loader />
                </div>
            )
        }

        return (
            <Container>
            <LoginContainer className={'box'}>
                <ThemeProvider theme={theme}>
                    <UserNameInput
                        required={true}
                        label="User Name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        onChange={this.handleUsernameChange}
                    />
                </ThemeProvider>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password *</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={this.handlePasswordChange}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.handleClickShowPassword}
                            onMouseDown={this.handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                        labelWidth={85}
                    />
                </FormControl>
                <LogInButton color="primary" onClick={this.login}>Log In</LogInButton>
            </LoginContainer>
            </Container>
        )
    }
}

export default withRouter(Login);
