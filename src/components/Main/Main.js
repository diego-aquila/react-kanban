import './Main.css'
import Coluna from '../Coluna/Coluna'
import Cards from '../Cards/Cards'

const Main = () => {
    return (
        <main className='main'>
            <h1 className='main-title'>Kanban</h1>
            <div className='main-container'>
                <Coluna nameColumn='To Do' color='blue' img='cardeneta' >
                    <Cards img='male' label='Label' labelColor='blue'>Christmas Banners</Cards >
                    <Cards img='male' label='Label' labelColor='blue'>Redo Portfolio</Cards>
                </Coluna>
                <Coluna nameColumn='Inprogress' color='orange' img='computer' >
                    <Cards img='female' label='Always' labelColor='orange'>Coffee Break</Cards >
                    <Cards img='female' label='Webflow' labelColor='orange'>Updating Portfolio</Cards>
                </Coluna>
                <Coluna nameColumn='Review' color='purple' img='pencil' >
                    <Cards img='male' label='Release' labelColor='purple'>Release to Figma Community</Cards >
                    <Cards img='male' label='Feedback' labelColor='purple'>User Feedback</Cards>
                    <Cards img='male' label='Sourcing' labelColor='purple' >Background images from <a href='https://www.humaaans.com/'>humaaans.com</a></Cards>
                </Coluna>
                <Coluna nameColumn='Done' color='green' img='rocket' >
                    <Cards img='female' label='UI' labelColor='green'>Style Guide</Cards >
                    <Cards img='female' label='UI' labelColor='green'>Component Library</Cards>
                    <Cards img='female' label='UI' labelColor='green'>Sticker Components</Cards>
                </Coluna>
            </div>
        </main >
    )
}

export default Main