import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
const CountriesTables = () => {
    const [search,setSearch]= useState([]);
    const [countries,setCountries]= useState([]);
    const [filteredCountries,setFilteredCountries]= useState([]);

    const getCountries = async ()=>{
      try{
        const response = await axios.get("https://restcountries.com/v2/all");
        setCountries(response.data);
        setFilteredCountries(response.data);
      }catch(error){
        console.log(error);
      }
    };
  
    const columns=[
      {
        name:"Country Name",
        selector: row=>row.name,
      },
      {
        name:"Country Native Name",
        selector: row=>row.nativeName,
      },
      {
        name:"Country Capital",
        selector: row=>row.capital,
      },
      {
        name:"Country Flag",
        selector: row=><img width={50} height={50} src={row.flag}/>,
      },
      {
        name:"Action",
        cell:(row) =>(<button className='btn btn-primary' onClick={()=>alert(row.aplha2Code)} >Edit</button>),
      }
    ]
  
    useEffect(()=>{
      getCountries();
    },{});
    
    useEffect(()=>{
        const result = countries.filter(country=>{
            return country.name.toLowerCase().match(search.toLowerCase());
        })
        setFilteredCountries(result);
    },[search]);


  return (
    <DataTable 
        columns={columns}
        width='200px' 
        data={filteredCountries} 
        pagination
        fixedHeader
        fixedHeaderScrollHeight='350px'
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={
            <input type="text" placeholder='Search here' className='w-25 form-control' value={search} 
            onChange={(e)=>setSearch(e.target.value)}/>
        }
        subHeaderAlign='left'
    />
  )
}

export default CountriesTables
