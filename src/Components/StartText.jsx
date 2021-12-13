import React, { Component } from 'react'


/*Den "välkomst" text som syns på startsidan*/
export default class StartText extends Component {
    render() {
        return (
            <div>
                <h1 className="startH1">START</h1>
                <p className="startInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>


        );
    }
}