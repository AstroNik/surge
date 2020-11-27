import React, {Component} from 'react'


const List = ({items}) => {
    const listItems = items.map((data, index) => <div className="justify-content-between row w-100 container"
                                                      key={index}>
        <p> {data.productName} </p>
        <p> {data.quantity} </p>
        <p> $ {data.price} </p>
    </div>);

    return <>{listItems}</>;
};

class SalesOrderWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            price: 0,
            quantity: 0,
            items: [],
            total: 0,

        }
    }

    addItem = (e) => {
        e.preventDefault()

        this.setState({
            items: [
                {
                    productName: this.state.productName,
                    quantity: this.state.quantity,
                    price: this.state.price
                },
                ...this.state.items
            ]
        })

        console.log(this.state.items)

        document.getElementById("salesWidget").reset()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    calculate = () => {
        let total = 0;
        for (let i = 0; i < this.state.items.length; i++) {
            total += this.state.items[i].price * this.state.items[i].quantity
        }

        this.setState({
            total: total.toFixed(2)
        })

        localStorage.setItem('orderTotal', total.toFixed(2))
    }

    render() {
        return (
            <div style={{height: "500px", width: "250px", backgroundColor: "#cccccc"}}>
                <div className="container pt-2">
                    <form onSubmit={this.addItem} id="salesWidget" name="salesWidget">
                        <h5> Sales Order </h5>

                        <div className="form-group">
                            <input type="text" id="productName" onChange={this.handleChange}
                                   className="form-control form-control-sm w-100" placeholder="Product Name"/>
                        </div>

                        <div className="form-group">
                            <input type="number" step="any" id="price" onChange={this.handleChange}
                                   className="form-control form-control-sm w-100" placeholder="Price"/>
                        </div>

                        <div className="form-group">
                            <input type="number" id="quantity" onChange={this.handleChange}
                                   className="form-control form-control-sm w-100" placeholder="Quantity"/>
                        </div>

                        <div className="w-100 text-right">
                            <button className="w-50 btn-dark" type="submit"> Add Item</button>
                        </div>

                        <br/>
                        <h6> Order Summary </h6>
                        <hr/>
                        <div className="justify-content-between row w-100 container">
                            <p>ITM</p>
                            <p> QTY </p>
                            <p> $ </p>
                        </div>
                        <div style={{overflowY: "scroll", height: "75px", maxHeight:"75px", scrollbarWidth:"thin", scrollbarColor:"blue orange", backgroundColor:"white"}}>
                            <List items={this.state.items}/>
                        </div>
                        <br/>
                    </form>
                    <div className="w-100 text-right">
                        <button className="w-50 btn-dark" onClick={this.calculate}> Calculate</button>
                    </div>

                    <div className="justify-content-between row w-100 container pt-2">
                        <p>Total</p>
                        <p> $ {this.state.total} </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SalesOrderWidget
