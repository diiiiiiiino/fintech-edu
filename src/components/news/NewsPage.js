import React, { useState } from "react";
import NewsList from "./NewsList";
import SearchInput from "./SearchInput";
import AppHeader from "../common/AppHeader";
import axios from "axios";

const NewsPage = () => {
    const [searchText, setSearchText] = useState();
    const [searchResult, setSearchResult] = useState([]);

    const handleChange = (e) => {
        const searchText = e.target.value;
        setSearchText(searchText);
    };

    const handleClick = () => {
       /* let apiKey = "";
        axios
            .get(
                `https://newsapi.org/v2/everything?q=${searchText}&from=2023-07-02&sortBy=publishedAt&apiKey=${apiKey}`
            )
            .then(({ data }) => {
                console.log(data.articles);
                setSearchResult(data.articles);
            });*/

        const results = [ { title : '제목1', content : '내용1'  }, { title : '제목2', content : '내용2'  } ]
        setSearchResult(results);
    };

    return (
        <div>
            <AppHeader title={"뉴스검색"}></AppHeader>
            <SearchInput handleChange={handleChange} handleClick={handleClick}></SearchInput>
            {<NewsList newsList={searchResult}></NewsList>}
        </div>
    );
};

export default NewsPage;