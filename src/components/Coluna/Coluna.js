import './Coluna.css'

const Coluna = (props) => {
    const { nameColumn = 'To Do', color = 'blue', img, children } = props
    return (
        <div className={`coluna ${color}`}>
            <div className='column-title'>
                <img alt='icone' src={require(`./img/icon-${img}.png`)} />
                <h2>{nameColumn}</h2>
            </div>
            <div className='column-cards'>
                {children.map(e => e)}
            </div>
        </div>
    )
}

export default Coluna