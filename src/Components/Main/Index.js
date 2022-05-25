import React from 'react';
import BreadCrumb from './BreadCrumb';
import CardBody from './CardBody';
import CardData from './CardData';
import Footer from './Footer';

function Index(){
    return <div id="layoutSidenav_content">
            <main>
              <div class="container-fluid px-4">
                  <h1 class="mt-4">Tables</h1>
                  <BreadCrumb />
                  <CardBody />
                  <CardData />
              </div>
            </main>
            <Footer />
         </div>  
}
export default Index;