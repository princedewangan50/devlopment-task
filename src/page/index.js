

import React from "react";
import Layout from "../component/layout";

import "../main-style.scss";

const IndexPage = ({children})=>{
  return(
    <div>
     <Layout>
       {children}
     </Layout>
    </div>
  )
}
export default IndexPage;
