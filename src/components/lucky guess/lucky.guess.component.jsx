import './lucky.guess.styles.scss';


const LuckyGuess = () => {
    const numbers = [1, 3, 9, 77, 88]
    return(
        <div className='lucky-guess-con'>
        {
            numbers.map((number) => {
                return <div className='lucky-card'>
                   {number}
                </div>
            })
        }
        </div>
    )
}

export default LuckyGuess;