import React from 'react'
import Banner from '../../components/instructor/Banner';
import InstructorGrid from '../../components/instructor/InstructorGrid';
import GapManage from '../../components/common/GapManage';

function Instructor() {
  return (
   <>
   <Banner />
   <InstructorGrid/>
   <GapManage />
   
   </>
  )
}

export default Instructor