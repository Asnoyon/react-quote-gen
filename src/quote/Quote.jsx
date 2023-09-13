import React, { useEffect, useState } from 'react'

const Quote = () => {
    const [quote,setQuote]=useState("");
    const [author,setAuthor]=useState("")

    const fetchData = async()=>{
        const res = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")

        const data= await res.json();

        let dataQuotes = data.quotes;
        
        let randomNum = Math.floor(Math.random()* dataQuotes.length)

        let randomQuotes = dataQuotes[randomNum]
       
        
        setQuote(randomQuotes.quote)
        setAuthor(randomQuotes.author)
    }
    
    useEffect(() => {
        fetchData()  
    }, [])
    
    const handleClick= ()=>{
        fetchData()
    }

return (
    <div id="quote-box">
    <div id="text"><p>{quote}</p></div>
    <div id="author"><p>{author}</p></div>

    <div id="buttons">
      <button onClick={handleClick} id="new-quote">New Quote</button>
    </div>
  </div>
  )

}

export default Quote