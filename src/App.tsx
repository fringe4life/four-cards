
import Header from './components/Header'
import Card from './components/Card'
import cards from './data'
function App() {
  const cardEls = cards.map(({id, ...rest}) => <Card key={id} {...rest} />)
  return (
    <>
      <Header />
      <main className="grid justify-center col-[2]  mb-[2.875rem] md:mb-20 xl:mb-40 grid-cols-[19.625rem]  md:grid-cols-[21.875rem_21.875rem_21.875rem_21.875rem] gap-8  xl:grid-cols-[21.875rem_21.875rem_21.875rem] xl:grid-rows-4">
        {cardEls}
      </main>
    </>
  )
}

export default App
