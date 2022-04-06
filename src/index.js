import React from 'react';
import ReactDOM from 'react-dom';
import WinPage from './pages/winPage/WinPage'
import InGame from './pages/gamingPage/inGame'



ReactDOM.render(
    <body>
        <WinPage word={['测试1','测试2','测试3','测试4','测试5','测试6','测试1','测试2','测试3','测试4','测试5','测试6']}/>
    </body>,
    document.getElementById('root')
);
