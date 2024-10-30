import { useState } from "react"
import "./Search.css";


const SearchBar = ({setFilterList}) => {

    const [searchWord, setSearchWord] = useState("");


    const handleChange = (input) => {
        const value = input.target.value;
        setSearchWord(value);
        setFilterList(

        )
    };


    return (
        <div className="search-container">
            <input type="text" placeholder="Search..." value={searchWord} onChange={handleChange} />
            <ion-icon name= "search-outline" className="seatch-icon"></ion-icon>
        </div>
    );


};
 export default SearchBar;