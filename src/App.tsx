import { Button } from "@material-tailwind/react"
import { Toaster } from "react-hot-toast"


function App() {


  return (
    <>
     <Toaster/>
     <h1 className="text-3xl font-bold underline">
      Hello world!
      <Button placeholder={"djlksdns"}>button </Button>
    </h1>
    </>
  )
}

export default App
