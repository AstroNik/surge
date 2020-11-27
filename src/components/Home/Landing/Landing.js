import React, {Component} from "react"
import SalesOrderWidget from "../SalesOrderWidget/SalesOrderWidget";
import CreditCheckWidget from "../CreditCheckWidget/CreditCheckWidget";

class Landing extends Component {
    render() {
        return (
            <section id="home" className="home-section">
                <div className="d-flex justify-content-center">
                    <div className="row justify-content-center col-sm-auto">
                        <div className="mt-3 col-auto">
                            <SalesOrderWidget/>
                        </div>
                        <div className="mt-3 col-auto">
                            <CreditCheckWidget/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Landing
