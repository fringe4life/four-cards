
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import cards from './data'
function App() {
  const cardEls = cards.map(({id, ...rest}) => <Card key={id} {...rest} />)
  return (
    <>
      <Header />
      <main className="md:justify-center  col-[2] mb-[2.875rem] flex flex-col  md:grid-cols-4 gap-8 md:grid xl:grid-cols-3 xl:grid-rows-[4]">
        {cardEls}
      </main>
    </>
  )
}

export default App
