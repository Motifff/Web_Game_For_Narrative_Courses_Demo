import React from 'react'

let catDom = "";
let catSwitch = false;
export class Cat extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                initSwitch: false
            }
        }
        componentDidMount() {
            catDom = this.cat
        }
        toggleOpen(result,event) {
            this.setState({
                initSwitch: result
            }, () => {
                catSwitch = this.state.initSwitch;
                console.log(this.state.initSwitch, result);
            });
            event.preventDefault()
        }
        render() {
            const mouse = this.props.mouse;
            return (
                <div>
                    < img ref={item => this.cat = item} src="./3.png"
                         onMouseDown={this.toggleOpen.bind(this, true)} onMouseUp={this.toggleOpen.bind(this, false)}
                         style={{position: "absolute", left: mouse.x, top: mouse.y}}/>
                </div>
            )
        }
}
export class Position extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                x: 0,
                y: 0
            }
        }
        movePosition(event) {
            if (catDom && catSwitch) {
                this.setState({
                    x: event.clientX - catDom.width / 2,
                    y: event.clientY - catDom.height / 2
                })
            } else {
                return null;
            }
        }
        render() {
            return (
                <div style={{height: "100vh"}} onMouseMove={this.movePosition.bind(this)}>
                    {this.props.render(this.state)}
                </div>
            )
        }
}
export class Result extends React.Component {
    render() {
        return (
            <div>
                <Position render={mouse =>
                    (<Cat mouse={mouse}/>)}>
                </Position>
            </div>
        )
    }
}