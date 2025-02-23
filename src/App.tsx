
import Header from './components/Header'
import Card from './components/Card'
import cards from './data'
function App() {
  const cardEls = cards.map(({id, ...rest}) => <Card key={id} {...rest} />)
  return (
    <>
      <Header />
      <main className="grid justify-self-center col-[2]  mb-[2.875rem] md:mb-20 xl:mb-40 grid-cols-[1fr]  md:grid-cols-[1fr_9.8125rem_9.8125rem_9.8125rem_9.8125rem_1fr] gap-8  xl:grid-cols-[1fr_21.875rem_21.875rem_21.875rem_1fr] xl:grid-rows-4">
        {cardEls}
      </main>
    </>
  )
}

export default App
