import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { QuizCard } from "../quizCard/Card";
import { AddQuizForm } from "../addQuizForm/AddQuizForm";
import { DefaultStepper } from "../addQuizForm/Stepper";
import { SelectModule } from "../addQuizForm/SelectModule";
 
export function TabsWithIcon() {

const steps = [
  {
    value:0,
    name:"select module",
    component:<SelectModule></SelectModule>
  },
  {
    value:1,
    name:"Add quiz",
    component:<AddQuizForm></AddQuizForm>
  },
]

  const data = [
    {
      label: "Quiz List",
      value: "quiz-list",
      icon: Square3Stack3DIcon,
      desc: <QuizCard><p>hello</p></QuizCard>,
    },
    {
      label: "Add Quiz",
      value: "add-quiz",
      icon: UserCircleIcon,
      desc:<QuizCard><DefaultStepper steps={steps}></DefaultStepper></QuizCard>,
    }
  ];
  return (
    <Tabs className="mt-16" value="quiz-list">
      <TabsHeader placeholder={""}>
        {data.map(({ label, value, icon }) => (
          <Tab placeholder={""} key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody placeholder={""}>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}