import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { getMonth } from "../Data/ulti";
import CalenderHeader from "../Components/Calender_Components/CalenderHeader";
import Month from "../Components/Calender_Components/Month";
import SideBar from "../Components/Calender_Components/Sidebar";

const MainCalanderApp = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  return (
    <>
      <div className="h-screen flex flex-col">
        <CalenderHeader />
        <Flex flex={1}>
          <SideBar />
          <Month month={currentMonth} />
        </Flex>
      </div>
    </>
  );
};

export default MainCalanderApp;
