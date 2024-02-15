const TabButton = ({children}) => {

    function  handleClick(e) {
        console.log("hello world!")
    }


    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}

export default TabButton;