import { Button } from "@material-tailwind/react"
import { Toaster } from "react-hot-toast"
import { NavbarSimple } from "./components/navbar/Navbar"
import { TabsWithIcon } from "./components/tabs/Tabs"


function App() {


  return (
    <div className="container mx-auto">
     <Toaster/>
      <NavbarSimple></NavbarSimple>
      <TabsWithIcon></TabsWithIcon>
    </div>
  )
}

export default App
