import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import axios from "axios"
import Markdown from "react-markdown"
import './App.css'

function App() {
  const [code, setCode] = useState(
    `function sum(){
    return a+b
    }`
  )
  const [review,setReview]=useState("")

   useEffect(() => {
    prism.highlightAll()
  }, [])
  const BackendUrl=import.meta.env.VITE_BACKEND_URL
  
  async function getReview() {
    const response = await axios.post(BackendUrl, { code })
    console.log(response.data)
    setReview(response.data)
  }

  return (
     <>
     <main>
      <div className='left'>
        <div className='code'>
          <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />

          
        </div>
        <div className='review'
        onClick={getReview}
        >
        Review
        </div>

      </div>
      <div className='right'>
        <Markdown>{review}</Markdown>
      </div>

     </main>

     </>
  )
}

export default App
