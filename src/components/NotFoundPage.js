import React from 'react';

import Style from './NotFoundPage.module.scss'

class NotFoundPage extends React.Component{
    render(){
        return <div className={Style.container}>
            <h1>404</h1>
            <p>What are you doing here?</p>
          </div>;
    }
}
export default NotFoundPage;