import React, {useState} from 'react';
import axios from 'axios';
import './Search.css';
import Loader from './components';



 function Search(){
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [showPopup, setShowPopoup] = useState(false);
    const [carregando, setCarregando] = useState(false);

    // codigo JavaScript
    const handleSearch = async ()=>{
        try{
            setCarregando(true);
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)

            if(response.data.meals=== null || response.data.meals === 0){
                console.log('nenhum resultado foi encontrado');
                setSearchResults([]);
                setShowPopoup(true);

            } else{
                console.log('Resultados encontrados');
                setSearchResults(response.data.meals)
                setShowPopoup(false);
                
            }
        }
        catch(error){
            console.error('Erro ao extrair os dados', error)
        }
        finally{
            setCarregando(false)
        }
        }
   
    return(
        <>
        <header classNmae='container'>
            <div className='information-search'>
                <span className='search-input'>
                    <label className='label-input'>Pesquisar</label>
                    <input type='text' className='search-input'
                    id='search-term'
                    value = {searchTerm}
                    onChange={(e)=>{setSearchTerm(e.target.value)}}/>
                </span>
                <button type='button' className='search-button' onClick={handleSearch} >PESQUISAR</button>
            </div>
        </header>
        <div className='content-container'>
            <div className='answerImages'>
                {carregando?(<Loader/>): searchResults.length === 0 ?
                 (<p> Nenhum resultado encontrado</p>): (searchResults.map((recipe)=>{
                    <div className='containerImgs' key={recipe.idMeal}>
                          <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                          <h2>{recipe.strMeal}</h2>
                    </div>
                 }) )}
            </div>
        </div>

        </>
    )
}

export default Search