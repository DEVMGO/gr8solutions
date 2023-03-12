import React, { Fragment } from 'react'
// Components
import HeroDetailBlog from '@/components/blogg/detailBlog/heroDetailBlog';
import DownSection from '@/components/blogg/detailBlog/downSection';

const DetailBlog = () => {
  return (
    <Fragment>
        <HeroDetailBlog />
        <DownSection />
    </Fragment>
  )
}

export default DetailBlog
DetailBlog.layout = "L1";
