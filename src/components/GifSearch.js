import React from "react";


const GifSearch= (props) => {
  console.log(props)



  return (

    <div>
      <form >
        <input type="text" placeholder="enter gif" onChange={props.onSearch}/>
        <input type="submit" value="Submit" onClick={props.onSubmit}/>
      </form>
    </div>
  )


}

export default GifSearch
