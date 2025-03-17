import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize the state with a person object, a visibility flag, and time tracking
    this.state = {
      person: {
        fullName: 'Tony Stark',
        bio: 'Genius, billionaire, playboy, philanthropist.',
        imgSrc: "data:image/jpeg;base64,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",
        profession: 'Engineer & Superhero',
      },
      shows: false, // Controls profile visibility
      mountedTime: new Date(), // Stores the initial component mount time
      elapsedTime: 0, // Tracks elapsed time since mount
    };
  }

  // Lifecycle method - Runs after the component mounts
  componentDidMount() {
    // Start interval to update elapsed time every second
    this.interval = setInterval(() => {
      this.setState({
        elapsedTime: Math.floor((new Date() - this.state.mountedTime) / 1000),
      });
    }, 1000);
  }

  // Lifecycle method - Runs before the component unmounts to prevent memory leaks
  componentWillUnmount() {
    clearInterval(this.interval); // Stop the interval when the component is removed
  }

  // Function to toggle profile visibility
  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows, // Toggle visibility state
    }));
  };

  render() {
    const { person, shows, elapsedTime } = this.state; // Destructure state variables

    return (
      <div className='app-container'>
        {/* Show the profile only when 'shows' is true */}
        {shows && (
          <div className='profile-card'>
            <img src={person.imgSrc} alt={person.fullName} className='profile-img' />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h3>{person.profession}</h3>
          </div>
        )}

        {/* Button to toggle profile visibility */}
        <div>
          <button onClick={this.toggleProfile} className='toggle-btn'>
            {shows ? "Hide Profile" : "Show Profile"}
          </button>
        </div>

        {/* Timer displays how long the component has been mounted */}
        <p className='timer'>
          Component mounted {elapsedTime} seconds ago.
        </p>
      </div>
    );
  }
}

export default App;
