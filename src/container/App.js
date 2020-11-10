import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Schroll from '../components/Schroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

 
class App extends Component {
    constructor() {
        super()
        this.state={
            robo: [],
            searchfield: ''
        }
    }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {return response.json()})
    .then(users => {return this.setState({robo: users})})
}


 onSearchChange=(event)=>{
    this.setState({searchfield: event.target.value}) 
}
   
    render() {
        const {robo, searchfield} = this.state
        const filterList = 
        robo.filter(robot => robot.name.toLowerCase()
        .includes(searchfield.toLowerCase()))
       
       return !filterList.length ? <h1>Loading</h1> :
        (
        <div className='tc'>
            <h1>Hrs</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Schroll>
            <ErrorBoundry> 
                <CardList robo={filterList}/>
            </ErrorBoundry>
            
            </Schroll>
        </div>
    )
        } 
    
}
export default App;