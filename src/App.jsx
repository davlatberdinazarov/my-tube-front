import { Button } from "@material-tailwind/react";
import { ComplexNavbar } from "./components/navbar";
import { AccordionComponent } from "./components/accardion";
import { CreateVideo } from "./components/dialog";
import { RegistrationForm } from "./components/form";

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <ComplexNavbar/>
      <div className=" mx-auto max-w-7xl flex flex-col gap-4">
        <AccordionComponent/>
        <CreateVideo/>
        <RegistrationForm/>
      </div>
    </h1>
  )
}