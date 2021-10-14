import React, { Component } from 'react';

// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from './Say';

// const App = () => {
//   return <MyComponent name="React" favoriteNumber={1}>
//       리액트
//     </MyComponent>;
// };

// const App = () => {
//   return <Counter />;
// };

// const App = () => {
//   return <Say />;
// };

// import EventPractice from './EventPractice';

// const App = () => {
//   return <EventPractice />;
// };

// import ValidationSample from './ValidationSample';

// class App extends Component {
//   render() {
//     return (
//       <ValidationSample/>
//     );
//   }
// }

import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.ScrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    )
  }
}

export default App;