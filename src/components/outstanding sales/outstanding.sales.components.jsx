import './outstanding.sales.styles.scss';
import BigCard from '../big card/big.card.component';

const OutstandingSales = () => {
    const outstandingSales = [
        "Fans", "Shoes", "Bags", "Bread", "Tea", "Water"
    ]
    return(
        <>
        <h2 className='outstanding-title'>Outstanding Offers You Shouldn't miss</h2>
        <div className='outstanding-sales'>
        {
            outstandingSales.map((outstandingSale) => {
                return  <BigCard />
               
            })
        }
        </div>
        </>
    )
}

export default OutstandingSales;