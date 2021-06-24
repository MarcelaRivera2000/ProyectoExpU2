import React from 'react'

class MenuVarIn extends React.Component{
    render(){
        return (
            <div class ="wrapper">
                <p id="NameEmpresa">Menexx</p>
                <nav>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a href="#"  type="button">Search</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a href="#"  type="button">Friends</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a href="#"  type="button">Log Out</a>
                </nav>
            </div>
        );
    }
}

export default MenuVarIn
