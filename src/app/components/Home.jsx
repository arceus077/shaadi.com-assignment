import { withRouter } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import InfiniteScroll from "react-infinite-scroll-component";
import { LogOutButton, TypographyComponent, ToolbarComponent, Container, SubContainer } from './Home.styles'

class Home extends React.Component {
    constructor(props) {
        super();
        const isAuthorised = localStorage.getItem("isAuthorised");
        this.state = {
            page: 1,
            limit: 20,
            items: [],
            hasMore: true,
            isAuthorised,
        }
    }

    componentDidMount() {
        const { page, limit, items } = this.state;
        axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
          .then(res => {
            const newItems = res.data;
            this.setState({ items: [ ...items, ...newItems], page: page + 1, });
        })
    }

    fetchMoreData = () => {
        const { page, limit, items } = this.state;
        axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
          .then(res => {
            const newItems = res.data;
            this.setState({
                items: [ ...items, ...newItems],
                page: page + 1,
            }, () => {
                if(items.length >= 500) {
                    this.setState({ hasMore: false });
                }
            });
        })
    };

    logOutHandler = () => {
        localStorage.setItem("isAuthorised", false);
        this.props.history.push('login');
    };

    render() {
        const { items, isAuthorised, hasMore } = this.state;

        if (isAuthorised !== 'true') {
            this.props.history.push('login');
        }

        return (
            <div>
            <AppBar position="static">
            <ToolbarComponent>
                <TypographyComponent variant="h6">
                Home
                </TypographyComponent>
                <LogOutButton onClick={this.logOutHandler}>Log Out</LogOutButton>
            </ToolbarComponent>
            </AppBar>
                <InfiniteScroll
                    dataLength={items.length}
                    next={this.fetchMoreData}
                    hasMore={hasMore}
                    loader={<h4 style={{textAlign: 'center'}}>Loading...</h4>}
                >
                    {items.map((value) => (
                        <Container key={`${value.id} ${value.url}`}>
                            <SubContainer key={`${value.id} ${value.index}`}>
                                <img
                                    style={{width:'400px', height: '300px', borderRadius: '20px 20px 10px 10px'}}
                                    src={value.download_url}
                                />
                                <div style={{
                                    padding: '20px 10px', color: '#fff',
                                    textTransform: 'capitalize',
                                    border: '2px solid #fff',
                                    borderRadius: '10px 10px 20px 20px',
                                    backgroundImage: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
                                }}>
                                    {value.author}
                                </div>
                            </SubContainer>
                        </Container>
                    ))}
                </InfiniteScroll>
            </div>
        )

    }
}

export default withRouter(Home);
