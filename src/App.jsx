import FloatingActions from './components/FloatingActions'
import Header from './components/Header'
import JourneyBoard from './components/JourneyBoard'
import JourneyBoardHead from './components/JourneyBoardHead'
import JourneyBoardsContainer from './components/JourneyBoardsContainer'
import NotionBoard from './components/NotionBoard'

function App() {

    return (
        <>
            <Header />
            <div className='rounded-xl overflow-hidden shadow-lg absolute z-10 bg-white'>
                <JourneyBoard />
            </div>
            <div className='right-0 absolute z-20'>
                <NotionBoard />
            </div>
            <div className='max-w-screen-lg mx-auto px-8'>
                <JourneyBoardHead />
                <JourneyBoardsContainer />
            </div>
            <FloatingActions />

        </>
    )
}

export default App
