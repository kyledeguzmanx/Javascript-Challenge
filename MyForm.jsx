class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: this.state.input
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          
          <input value={this.state.input} onChange={this.handleChange}/>
          <button type='submit' onClick={this.handleSubmit}>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
/*------------------------- CAN ALSO USE STATE HOOKS -------------------------
EXAMPLE: 
const [count, setCount] = useState(0);

SRC:
https://reactjs.org/docs/hooks-state.html

DESCRIPTION
USE IN LIEU OF CREATING A STATE AND STATE HANDLER FUNCTION.
---------------------END----------------------------*/
