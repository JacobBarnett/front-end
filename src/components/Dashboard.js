import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';
import HostedEvent from './HostedEvent';
import InviteOpen from './InviteOpen';
import InviteAccepted from './InviteAccepted';

class Dashboard extends React.Component {
    state = {
        hostedEvents: [],
        receivedInvites: []        
    };
    
    componentDidMount() {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        
        // Pulling initial userData (all events, your hosted, and invites)
        axiosWithAuth()
            .get(`/${userId}/potlucks`)
            .then(res => {
                console.log("Getting User Data:", res);
                this.setState({
                    hostedEvents: res.data.hosted,
                    receivedInvites: res.data.InvitedTo
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return(
            <StyledDash>
                <header>
                    <h1>DASHBOARD</h1>
                </header>
                
                <div>
                    <h2>You are Hosting</h2>
                    {/* {this.state.hostedEvents.length !== 0 ? this.state.hostedEvents.map(event => {
                        return(<HostedEvent event={event} />)
                    }) : <p>You have not created any events.</p> } */}
                    <Link to="/create" className="dashButton" >Create Event</Link>
                </div>
                
                <div>
                    <h2>Your Open Invitations</h2>
                    {/* {this.state.receivedInvites.map(event => {
                        event.invites.filter(invite => invite.to === this.userId && invite.status === "pending").map(event => {
                            return(<InviteOpen event={event}/>)
                        })
                    })} */}
                </div>
                
                <div>
                    <h2>Your Accepted Events</h2>
                    {/* {this.state.receivedInvites.map(event => {
                        event.invites.filter(invite => invite.to === this.userId && invite.status === "accepted").map(event => {
                            return(<InviteAccepted event={event}/>)
                        })
                    })} */}
                </div>
            </StyledDash>
        )
    }
}

export default Dashboard;

const StyledDash = styled.div`
`


// const StyledStatusContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   align-items: center;
//   border-radius: 0.375rem;

//   &.Paid {
//     background-color: var(--clr-success-faded);
//     color: var(--clr-success);
//   }
//   .invoice-status-circle.Paid {
//     background-color: var(--clr-success);
//   }
//   .invoice-state-text.Paid {
//     color: var(--clr-success);
//   }

//   &.Pending {
//     background-color: var(--clr-pending-opac-orange);
//   }
//   .invoice-status-circle.Pending {
//     background-color: var(--clr-pending-orage);
//   }
//   .invoice-state-text.Pending {
//     color: var(--clr-pending-orage);
//   }

//   &.Draft {
//     background-color: var(--clr-nav-purple-gray-faded);
//     /* goback */
//   }
//   .invoice-status-circle.Draft {
//     background-color: var(--clr-nav-purple-gray);
//   }
//   .invoice-state-text.Draft {
//     color: var(--clr-nav-purple-gray);
//   }

//   @media (max-width: 600px) {
//     grid-area: invoice-status-visual-container;

//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-wrap: nowrap;
//   }
// `;

// export default function InvoiceStatus({ invoiceStatus }) {
//   return (
//     <StyledStatusContainer
//       className={invoiceStatus[0].toUpperCase() + invoiceStatus.slice(1)}
//     >
//       <div
//         className={`invoice-status-circle ${
//           invoiceStatus[0].toUpperCase() + invoiceStatus.slice(1)
//         }`}
//       />
//       <h4
//         className={`invoice-state-text ${
//           invoiceStatus[0].toUpperCase() + invoiceStatus.slice(1)
//         }`}
//       >
//         {invoiceStatus[0].toUpperCase() + invoiceStatus.slice(1)}
//       </h4>
//     </StyledStatusContainer>
//   );
// }