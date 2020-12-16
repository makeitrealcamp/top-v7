import {useEffect} from 'react';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';

const handler = window.ePayco.checkout.configure({
  key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
  test: true,
});

function Payment() {
  function handleClick() {
    handler.open({
      external: 'false',
      autoclick: false,

      amount: '20000',
      name: 'Programa TOP Make it Real',
      description: 'programa fullstack inmersivo',
      currency: 'cop',

      country: 'CO',
      lang: 'en',
      tax: '0',
      tax_base: '0',

      invoice: '12345',
      extra1: 'extra1',
      extra2: 'extra2',
      extra3: 'extra3',

      response: `${process.env.REACT_APP_BASE_URL}/response`,

      name_billing: 'Simon Hoyos',
      address_billing: 'Calle 46 # 35 - 22',
      type_doc_billing: 'cc',
      number_doc_billing: '432158907',
      mobilephone_billing: '3504678291',

      // methodsDisable: ["TDC", "PSE","SP","CASH","DP"],
    })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      Pagar
    </button>
  )
}

function queryString(query) {
  const res = {}
  query
    .replace('?', '')
    .split('&')
    .forEach(q => {
      const [key, value] = q.split('=')
      res[key] = value
    })
  return res
}

function Response({ location }) {
  useEffect(() => {
    const { ref_payco } = queryString(location.search)

    axios({
      method: 'GET',
      baseURL: 'https://api.secure.payco.co',
      url: `/validation/v1/reference/${ref_payco}`
    })
      .then(({ data }) => {
        console.log(data)
      })
  }, [location])

  return <p>Repuesta de la transacción</p>
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Payment} />
          <Route exact path="/response" component={Response} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
