import './style.scss';

/*
function Button(props) {
  +
    return <button>{props.text}</button>
  +
  }
*/
function App() {
  const name = 'Tayfun'
	/*
+
  const h1 = createElement('h1', null, 'prototurk.com')
+
  const ul = createElement('ul', null, todos.map(todo => createElement('li', null, todo)))
+
	const button = createElement(Button, {
+
		text: 'Buton Texti'
+
	}, null)
+
  return createElement('main', {
+
    className: 'test',
+
    id: 'main'
+
  }, h1, ul, button)
+
	 */

  return( 
  <>
    +
    +
          <h1 tabIndex="3" style={{color: 'red', backgroundColor: 'yellow'}}>prototurk.com</h1>
    +
          <label htmlFor="search" tabIndex="2" onClick={() => alert('merhaba')}>Arama</label>
    +
          <input type="text" id="search" tabIndex="1" />
    +
          <ul>
    +
            
          
    +
          </ul>
    +
        </>)
}
export default App;
