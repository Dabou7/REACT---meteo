import React from 'react';
import './App.css';
import Header from './Header';
import Days from './Days';
import Api from './Api';

const App= () => {
  
    return (
      <div className="App">
                    <Header/>
        <div id="root">
          <div className="App">
              <div className="row">
                  <div className="col s12 m6 push-m3">
                      <div className="weather card blue-grey darken-1">
                        
                        <Api/>
                        
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }


export default App;
