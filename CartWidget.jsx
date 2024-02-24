import Cart from '../assets/Cart.svg'

const CartWidget = () => {
    return (<><div className='flex-row'>
        <img src={Cart} alt="Cart" />
        <span className='text-black'>(19)</span>
    </div></>);
}

export default CartWidget;