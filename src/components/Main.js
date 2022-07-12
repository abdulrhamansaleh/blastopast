import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import SelectionSegment from './SelectionSegment';
import GetEvent from './GetEvent';
import Header from './Header';

export default function Main() {
  return (
    <>
    <div><Header/></div>
    <div> 
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SelectionSegment />}></Route>
            <Route path="explore-current" element={<GetEvent custom={0} />}></Route>
            <Route path="explore-custom" element={<GetEvent custom={1} />}></Route>
        </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}
