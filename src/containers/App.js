import React, { useState, useEffect } from "react";
import CardList from "../components/CardList.js";
import SearchBox from "../components/SearchBox.js"
import './App.css'
import Scroll from "../components/Scroll.js";
import ErrorBoundary from "../components/ErrorBoundary.js";

function App() {

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState(''); 
    // constructor(){
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield: '' 
    //     }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    },[])// It's the same as component did mount. 

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => this.setState({ robots: users }));
    // }

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !robots.length ?
        <h1>Loading... Please wait!</h1>:
        (
            <div className="tc">
                <h1 className="f1">Robofriends!</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots = {filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
}


export default App;