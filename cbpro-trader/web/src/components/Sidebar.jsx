import React from 'react';
import DetailsContainer from '../containers/DetailsContainer'
import FlagsContainer from '../containers/FlagsContainer'
import OrdersContainer from '../containers/OrdersContainer'
import BalancesContainer from '../containers/BalancesContainer';

function Sidebar(props) {
    const { active_period, period_list, primary_section, secondary_section, changePrimarySection, changeSecondarySection, changeActivePeriod } = props;
    return (
        <div id="sidebar">
            <div id="primary-section">
                <div id="primary-selector">
                    <button className={primary_section === "periods" ? "active-button" : ""} onClick={() => {changePrimarySection("periods")}}>Periods</button>
                    <button className={primary_section === "balances" ? "active-button" : ""} onClick={() => {changePrimarySection("balances")}}>Balances</button>
                </div>
                <div id="primary-details">
                    { primary_section === "periods" && 
                        <ul id="period-list">
                            {period_list.map(period_name => {
                                return(
                                    <li className={active_period === period_name ? "focused period" : "period"} onClick={() => {changeActivePeriod(period_name)}}>{period_name}</li>
                                )
                            })}
                        </ul>
                    }   
                    { primary_section === "balances" && <BalancesContainer /> }
                </div>
            </div>
            <div id="secondary-section">
                <div id="secondary-selector">
                    <button className={secondary_section === "details" ? "active-button" : ""} onClick={() => {changeSecondarySection("details")}}>Details</button>
                    <button className={secondary_section === "flags" ? "active-button" : ""} onClick={() => {changeSecondarySection("flags")}}>Flags</button>
                    <button className={secondary_section === "orders" ? "active-button" : ""} onClick={() => {changeSecondarySection("orders")}}>Orders</button>
                </div>
                <div id="secondary-details">
                    {secondary_section === "details" && <DetailsContainer />}
                    {secondary_section === "flags" && <FlagsContainer />}
                    {secondary_section === "orders" && <OrdersContainer />}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;