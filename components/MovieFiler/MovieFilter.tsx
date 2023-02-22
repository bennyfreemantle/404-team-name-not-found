import React, { useState } from 'react'
import Select from 'react-select';
import OptionTypeBase from 'react-select'
import { StylesConfig } from 'react-select';

interface GenreType {
    value: string;
    label: string;
  }

const genre: GenreType[] = [
    { value: 'Action', label: 'Action' },
    { value: 'Thriller', label: 'Thriller' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Comedy', label: 'Comedy' },
    { value: 'Fantasy', label: 'Fantasy' },
    { value: 'Romance', label: 'Romance' },
    { value: 'Science Fiction', label: 'Science Fiction' },
    { value: 'Crime', label: 'Crime' },
    { value: 'Mystery', label: 'Mystery' },
    { value: 'War', label: 'War' },
    { value: 'Western', label: 'Western' },
    { value: 'Sports', label: 'Sports' },
    { value: 'Popular', label: 'Popular' },  
  ];
  
  const customStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#1E293B',      
      color: '#fff',
      width: '20rem', 
      marginBottom: '1rem',
      border: 'none',    
    }),
    menu: (provided) => ({
        ...provided,
        width: '17.5rem',
        opacity: '85%',
      }),
    option: (provided) => ({
        ...provided,
        color: '#fff',
        backgroundColor: '#4a5568',        
        border: 'none',
    }),  
  };



function MovieFilter() {
    const [selectedOption, setSelectedOption] = useState<GenreType | null>(null);

    function handleSelect(option: OptionTypeBase | null) {
        setSelectedOption(option as GenreType | null);
      }

  return (
    <div>
        <Select 
        options={genre} 
        placeholder='Select a genre' 
        styles={customStyles}
        onChange={(selectedOption, actionMeta) => {
            handleSelect
        }}
        />
    </div>
  )
}

export default MovieFilter