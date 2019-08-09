import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    {/*<h2>Laravel API test</h2>*/}
                </div>
                <Button/>
            </div>
        );
    }
}

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: null
        };
        this.foo = this.foo.bind(this);
    }

    foo() {
        fetch("http://localhost:8000/api/post/1")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                (error) => {
                    console.log(error.toString());
                    
                    this.setState({
                        isLoaded: true,
                        items: "error?",
                        error
                    });
                }
            )
    }

    render() {
        let element;
        if (this.state.isLoaded){
            element = "loaded";
            if (this.state.items === undefined){
                console.log(this.state.error);
            }else {
                console.log(this.state.items);
            }
        }else{
            element = "loading";
        }

        return (<div>
                <button id={"button-id"} onClick={this.foo}>
                    get something
                </button>
                <textarea id={"text-id"}
                          value={element}
                          cols={"30"}
                          rows={"5"}
                          readOnly={true}
                >
                </textarea>
            </div>
        );
    }
}

export default App;
