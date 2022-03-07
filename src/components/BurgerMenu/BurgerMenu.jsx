import { BurgerMenuBody, MenuButton, BurgerMenuHeder, BurgerMenuMain } from "./BurgerMenu.css"
import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";


const BurgerMenu = ({ items, menuTitle }) => {

    const history = useHistory();
    const [showMenu, setShowMenu] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (showMenu && ref.current && !ref.current.contains(e.target)) {
                setShowMenu(false)
            }
        }
        document.addEventListener("click", checkIfClickedOutside)

        return () => {
            document.removeEventListener("click", checkIfClickedOutside)
        }
    }, [showMenu]);


    const menuToShow = items.map(el => {
        return <MenuButton key={el.title} disabled={el.disabled} onClick={() => {

            history.push(el.route)

        }}>{el.title}</MenuButton>
    })
    return (
        <BurgerMenuMain ref={ref} >
            <BurgerMenuHeder onClick={() => {
                setShowMenu(!showMenu)
            }}>
                {menuTitle}
            </BurgerMenuHeder>
            <BurgerMenuBody showMenu={showMenu} >
                {menuToShow}
            </BurgerMenuBody>
        </BurgerMenuMain>
    )

}
export default BurgerMenu