import { Flex, Heading, IconButton, useColorMode } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import MainNoteApp from "./Pages/MainNoteApp";
import MainReminderApp from "./Pages/MainReminderApp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
function App() {
  return (
    <>
      <MainNoteApp/>
    </>
  );
}

export default App;
