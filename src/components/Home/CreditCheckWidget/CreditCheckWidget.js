import React, {Component} from 'react'

class CreditCheckWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            credit: 0,
            activeClass: "",
        }
    }

    creditFocus = React.createRef()

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    check = () => {
        let orderTotal = parseFloat(localStorage.getItem('orderTotal'))

        if(this.state.credit > orderTotal){
            this.setState({activeClass: "creditTrue"})
            sessionStorage.setItem("creditLimit", this.state.credit)
            this.creditFocus.current.focus();
        }
        else if (this.state.credit < orderTotal) {
            this.setState({activeClass: "creditFalse"})
            sessionStorage.setItem("creditLimit", this.state.credit)
            this.creditFocus.current.focus();
        }
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.credit !== prevState.credit){
            this.check()
        }
    }

    render(){
        return (
            <div style={{height: "85px", width: "200px", backgroundColor: "#cccccc"}}>
                <div className="container pt-2">
                    <h5> Credit Check </h5>
                    <div className="form-group">
                        <input ref={this.creditFocus} type="number" name="credit" id={this.state.activeClass} step="any" onChange={this.handleChange}
                               className="form-control form-control-sm w-100" placeholder="Credit Limit"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreditCheckWidget
