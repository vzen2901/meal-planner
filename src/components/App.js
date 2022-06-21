import React, {Component} from 'react';
// import { addRecipe } from '../actions';
import { connect } from 'react-redux';

class App extends Component {
  // state = {
  //   calendar: null
  // }
  // componentDidMount() {
  //   const {store} = this.props
  //   store.subscribe(() => {
  //     this.setState(() => ({
  //       calendar: store.getState()
  //     }))
  //   })
  // }
  // submitFood = () => {
  //   this.props.store.dispatch(addRecipe({
  //     day: 'monday', 
  //     meal: 'breakfast',
  //     recipe: {
  //       lable: this.input.value
  //     },
  //   }))
  //   this.input.value = ''
  // }
  render() {
    console.log('props', this.props);
    return(
      <div>
        {/* <input
          type = 'text'
          ref = {(input) => this.input = input}
          placeholder = "Monday's Breakfast"
        />
        <button onClick={this.submitFood}>Submit</button>
        <pre>
          Monday's Breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}
        </pre> */}

        Hello world

      </div>
    )
  }
}
function mapStateToProps(calendar) {//component hỗ trợ
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday',];
  return {
    calendar: dayOrder.map((day) => ({
        day,
        meals: Object.keys(calendar[day]).reduce((meals, meal) => {
            meals[meal] = calendar[day][meal]
            ? calendar[day][meal]
            : null
            return meals;
        }, {})
    }))

  } 
}

// export default App;
export default connect(mapStateToProps)(App);
//nếu thực hiện action trong Component
//=>cần kết nối Component đó với connect()