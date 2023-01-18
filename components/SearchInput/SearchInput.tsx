import React from 'react'

export default function SearchInput() {
  return (
    <>
<form onSubmit={handleSearch}>
<input type="text" onChange={handleInput} />
<input type='submit' value='Search'/> 
</form>
</>
  )
}
