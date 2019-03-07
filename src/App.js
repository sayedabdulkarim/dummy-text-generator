import React, { Component } from 'react';
import './App.css';
import Output from './Component/output';
import Text from './Component/controls/Text';
import axios from 'axios';

class App extends Component {
  
    state = {
      paras: 4,
      html: true,
      text: ''
    }
  

  componentWillMount(){
    this.getSampleText();
  }

  getSampleText(){
    axios.get('https://baconipsum.com/api/?type=all-meat&paras='+this.state.paras+'&html='+this.state.html+'&start-with-lorem=1')
      .then((response) => {
        this.setState({text: response.data}, function(){
          // console.log(this.state);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  showHtml(x){
      this.setState({html: x}, this.getSampleText);
  }

  changeParas(number){
      this.setState({paras: number}, this.getSampleText);
  }

  render() {
    return (
      <div className="container" style={{background: 'orange', marginTop: '10vh', marginBottom: '10vh'}}>
        <h1 className="text-center"><span className="c">Lorem Ipsum</span><span className="d"> Generator</span></h1>
        <hr />
        <form className="form-inline">
          <div className="form-group">
            <label>Paragraphs:</label>
            <Text value={this.state.paras} onChange={this.changeParas.bind(this)} />
          </div>
        </form>
        <br /><br />
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;