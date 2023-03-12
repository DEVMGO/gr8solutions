import React, { Fragment } from 'react'
// Components
import HeroServices from '@/components/Vara_Tjanster/heroServices'
import ListServices from '@/components/Vara_Tjanster/listSevices'

const Vara_Tjanster = () => {
  return (
    <Fragment>
        <HeroServices />
        <ListServices />
    </Fragment>
  )
}

export default Vara_Tjanster

Vara_Tjanster.layout = "L1";
