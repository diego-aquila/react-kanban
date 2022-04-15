import './Main.css'
import Coluna from '../Coluna/Coluna'
import Cards from '../Cards/Cards'
// import img from './img/icon-caderneta.png'

const Main = () => {
    return (
        <main className='main'>
            <h1 className='main-title'>Kanban</h1>
            <div className='main-container'>
                <Coluna nameColumn='To Do' color='blue' img='cardeneta' >
                    <Cards img='male'>Christmas Banners</Cards >
                    <Cards img='male'>Redo Portfolio</Cards>
                </Coluna>
                <Coluna nameColumn='Inprogress' color='orange' img='computer' >
                    <Cards img='female'>Coffee Break</Cards >
                    <Cards img='female'>Updating Portfolio</Cards>
                </Coluna>
                <Coluna nameColumn='Review' color='purple' img='pencil' >
                    <Cards img='male'>Release to Figma Community</Cards >
                    <Cards img='male'>User Feedback</Cards>
                    <Cards img='male'>User Feedback</Cards>
                    <Cards img='male'>Background images from humaaans.com</Cards>
                </Coluna>
                <Coluna nameColumn='Done' color='green' img='rocket' >
                    <Cards img='female'>Style Guide</Cards >
                    <Cards img='female'>Component Library</Cards>
                    <Cards img='female'>Sticker Components</Cards>
                </Coluna>
            </div>
        </main >
    )
}

export default Main